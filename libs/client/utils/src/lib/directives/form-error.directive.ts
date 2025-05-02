import {
  Directive,
  EmbeddedViewRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import {
  combineLatest,
  distinctUntilChanged,
  EMPTY,
  map,
  ReplaySubject,
  startWith,
  Subject,
  switchMap,
  takeUntil,
} from 'rxjs';
import { FormErrorRootDirective } from './form-error-root.directive';

export interface HasErrorContext {
  $implicit: unknown;
}

@Directive({
  selector: '[hasError]',
  providers: [FormErrorRootDirective],
})
export class FormErrorDirective implements OnInit, OnDestroy {
  private hasErrorRoot = inject(FormErrorRootDirective);
  private templateRef = inject(TemplateRef<HasErrorContext>);
  private vcr = inject(ViewContainerRef);

  private destroyed$ = new Subject<boolean>();
  static ngTemplateContextGuard(_dir: FormErrorDirective, ctx: unknown): ctx is HasErrorContext {
    return true;
  }

  @Input()
  set hasError(errorName: string) {
    this.errorName$.next(errorName);
  }

  private errorName$ = new ReplaySubject<string>(1);
  private ctrl$ = this.hasErrorRoot.formControl$;
  private status$ = this.ctrl$.pipe(
    switchMap(ctrl => {
      return (ctrl.statusChanges || EMPTY).pipe(startWith(null));
    }),
  );

  private error$ = combineLatest([this.ctrl$, this.errorName$, this.status$]).pipe(
    map(([ctrl, errorName]) => ({
      hasError: ctrl.hasError(errorName),
      value: ctrl.getError(errorName),
    })),
    distinctUntilChanged((x, y) => x.hasError === y.hasError && x.value === y.value),
  );

  private view?: EmbeddedViewRef<HasErrorContext>;

  ngOnInit(): void {
    this.error$.pipe(takeUntil(this.destroyed$)).subscribe(error => {
      if (!error.hasError) {
        this.view?.destroy();
        this.view = undefined;
        return;
      }

      if (this.view) {
        this.view.context.$implicit = error.value;
        this.view.markForCheck();
        return;
      }

      this.view = this.vcr.createEmbeddedView(this.templateRef, {
        $implicit: error.value,
      });
    });
  }

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
