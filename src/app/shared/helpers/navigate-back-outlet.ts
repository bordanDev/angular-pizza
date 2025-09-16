import { ActivatedRoute, Router } from '@angular/router';

export function navigateBackOutlet(
  route: ActivatedRoute,
  router: Router,
): void {
  const outletsName = route.outlet; // drawer outlet name
  router.navigate(
    [
      {
        outlets: {
          [outletsName]: null,
        },
      },
    ],
    { relativeTo: route.root }, // root for avoid issue with nesting route
  );
}
