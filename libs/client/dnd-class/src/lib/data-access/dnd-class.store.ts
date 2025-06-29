import { inject } from '@angular/core';
import { DnDClassState } from '@interfaces';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { DnDClassService } from './dnd-class.service';
import { distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';

const initialState: DnDClassState = {
  dndClasses: [],
  spells: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const DnDClassStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, dndClassService = inject(DnDClassService)) => ({
    loadAllDnDClasses: rxMethod<void>(
      pipe(
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return dndClassService.getAllDnDClasses().pipe(
            tapResponse({
              next: dndClasses => patchState(store, { dndClasses, isLoading: false }),
              error: err => {
                patchState(store, { isLoading: false });
                console.error(err);
              },
            }),
          );
        }),
      ),
    ),
    loadDnDClass: rxMethod<string>(
      pipe(
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap((dndClassId: string) => {
          return dndClassService.getDnDClass(dndClassId).pipe(
            tapResponse({
              next: dndClass => patchState(store, { spells: dndClass.spells, isLoading: false }),
              error: () => {
                patchState(store, { isLoading: false });
              },
            }),
          );
        }),
      ),
    ),
  })),
);
