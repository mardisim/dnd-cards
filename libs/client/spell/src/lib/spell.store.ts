import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { tapResponse } from '@ngrx/operators';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { distinctUntilChanged, pipe, switchMap, tap } from 'rxjs';
import { SpellService } from './spell.service';
import { SpellState } from '@interfaces';

const initialState: SpellState = {
  spells: [],
  isLoading: false,
  filter: { query: '', order: 'asc' },
};

export const SpellStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store, spellService = inject(SpellService)) => ({
    loadAllSpells: rxMethod<void>(
      pipe(
        distinctUntilChanged(),
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return spellService.getAllSpells().pipe(
            tapResponse({
              next: spells => patchState(store, { spells, isLoading: false }),
              error: err => {
                patchState(store, { isLoading: false });
                console.error(err);
              },
            }),
          );
        }),
      ),
    ),
  })),
);
