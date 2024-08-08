import { Route } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Route[] = [
  { path: 'blog', component: BlogComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/admin', pathMatch: 'full' }
];
