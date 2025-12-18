import { inject } from '@angular/core';
import { DnDClassState } from '@interfaces';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { DnDClassesService } from './dnd-class.service';

const initialState: DnDClassState = {
  dndClasses: [],
  spells: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const DnDClassStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, dndClassesService = inject(DnDClassesService)) => ({
    loadAllDnDClasses: rxMethod<void>(
      pipe(
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return dndClassesService.getAllDnDClasses().pipe(
            tapResponse({
              next: (dndClasses) =>
                patchState(store, { dndClasses, isLoading: false }),
              error: (err) => {
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
        switchMap((dndClassesId: string) => {
          return dndClassesService.getDnDClass(dndClassesId).pipe(
            tapResponse({
              next: (dndClasses) =>
                patchState(store, {
                  spells: dndClasses.spells,
                  isLoading: false,
                }),
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
