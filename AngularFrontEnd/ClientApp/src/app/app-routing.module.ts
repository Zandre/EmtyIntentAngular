import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Layout1Component} from './layout/layouts/layout-1/layout.component';
import {Layout2Component} from './layout/layouts/layout-2/layout.component';
import { ForceUsersComponent } from './force-users/force-users.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    {
        path: '',
        component: Layout1Component,
        children: [
            // Home
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
            },

            {
              // TODO: ZB
              // Ideally this should all follow the same pattern
              path: 'force-users',
              component: ForceUsersComponent,
              canActivate: [AuthGuard],
              children: []
            },


            // Typography
            {
                path: 'typography',
                loadChildren: () => import('./pages/typography/typography.module').then(m => m.TypographyModule)
            },


            // Widgets
            {
                path: 'widgets',
                loadChildren: () => import('./pages/widgets/widgets.module').then(m => m.WidgetsModule)
            },


            // Tables
            {
                path: 'tables/html-table',
                loadChildren: () => import('./pages/tables/html-table/html-table.module').then(m => m.HtmlTableModule)
            },
            {
                path: 'tables/data-table',
                loadChildren: () => import('./pages/tables/data-table/data-table.module').then(m => m.DataTableModule)
            },


            // Forms
            {
                path: 'forms/form-elements',
                loadChildren: () => import('./pages/forms/form-elements/form-elements.module').then(m => m.FormElementsModule)
            },
            {
                path: 'forms/form-components',
                loadChildren: () => import('./pages/forms/form-components/form-components.module').then(m => m.FormComponentsModule)
            },
            {
                path: 'forms/form-layouts',
                loadChildren: () => import('./pages/forms/form-layouts/form-layouts.module').then(m => m.FormLayoutsModule)
            },
            {
                path: 'forms/form-validation',
                loadChildren: () => import('./pages/forms/form-validation/form-validation.module').then(m => m.FormValidationModule)
            },


            // User Interfaces
            {
                path: 'user-interface/colors',
                loadChildren: () => import('./pages/user-interface/colors/colors.module').then(m => m.ColorsModule)
            },
            {
                path: 'user-interface/css-animations',
                loadChildren: () => import('./pages/user-interface/css-animations/css-animations.module').then(m => m.CssAnimationsModule)
            },
            {
                path: 'user-interface/buttons',
                loadChildren: () => import('./pages/user-interface/buttons/buttons.module').then(m => m.ButtonsModule)
            },
            {
                path: 'user-interface/icons',
                loadChildren: () => import('./pages/user-interface/icons/icons.module').then(m => m.IconsModule)
            },
            {
                path: 'user-interface/listviews',
                loadChildren: () => import('./pages/user-interface/listviews/listviews.module').then(m => m.ListviewsModule)
            },
            {
                path: 'user-interface/toolbars',
                loadChildren: () => import('./pages/user-interface/toolbars/toolbars.module').then(m => m.ToolbarsModule)
            },
            {
                path: 'user-interface/cards',
                loadChildren: () => import('./pages/user-interface/cards/cards.module').then(m => m.CardsModule)
            },
            {
                path: 'user-interface/alerts',
                loadChildren: () => import('./pages/user-interface/alerts/alerts.module').then(m => m.AlertsModule)
            },
            {
                path: 'user-interface/badges',
                loadChildren: () => import('./pages/user-interface/badges/badges.module').then(m => m.BadgesModule)
            },
            {
                path: 'user-interface/bredcrumbs',
                loadChildren: () => import('./pages/user-interface/bredcrumbs/bredcrumbs.module').then(m => m.BredcrumbsModule)
            },
            {
                path: 'user-interface/jumbotron',
                loadChildren: () => import('./pages/user-interface/jumbotron/jumbotron.module').then(m => m.JumbotronModule)
            },
            {
                path: 'user-interface/navs',
                loadChildren: () => import('./pages/user-interface/navs/navs.module').then(m => m.NavsModule)
            },
            {
                path: 'user-interface/pagination',
                loadChildren: () => import('./pages/user-interface/pagination/pagination.module').then(m => m.PaginationModule)
            },
            {
                path: 'user-interface/progress',
                loadChildren: () => import('./pages/user-interface/progress/progress.module').then(m => m.ProgressModule)
            },


            // Bootstrap Components
            {
                path: 'bootstrap-components/accordions',
                loadChildren: () => import('./pages/bootstrap-components/accordions/accordions.module').then(m => m.AccordionsModule)
            },
            {
                path: 'bootstrap-components/alerts',
                loadChildren: () => import('./pages/bootstrap-components/alerts/alerts.module').then(m => m.AlertsPageModule)
            },
            {
                path: 'bootstrap-components/buttons',
                loadChildren: () => import('./pages/bootstrap-components/buttons/buttons.module').then(m => m.ButtonsComponentModule)
            },
            {
                path: 'bootstrap-components/carousel',
                loadChildren: () => import('./pages/bootstrap-components/carousel/carousel.module').then(m => m.CarouselPageModule)
            },
            {
                path: 'bootstrap-components/collapse',
                loadChildren: () => import('./pages/bootstrap-components/collapse/collapse.module').then(m => m.CollapsePageModule)
            },
            {
                path: 'bootstrap-components/datepicker',
                loadChildren: () => import('./pages/bootstrap-components/datepicker/datepicker.module').then(m => m.DatepickerModule)
            },
            {
                path: 'bootstrap-components/dropdowns',
                loadChildren: () => import('./pages/bootstrap-components/dropdowns/dropdowns.module').then(m => m.DropdownsModule)
            },
            {
                path: 'bootstrap-components/modals',
                loadChildren: () => import('./pages/bootstrap-components/modals/modals.module').then(m => m.ModalsModule)
            },
            {
                path: 'bootstrap-components/pagination',
                loadChildren: () => import('./pages/bootstrap-components/pagination/pagination.module').then(m => m.PaginationPageModule)
            },
            {
                path: 'bootstrap-components/popover',
                loadChildren: () => import('./pages/bootstrap-components/popover/popover.module').then(m => m.PopoverPageModule)
            },
            {
                path: 'bootstrap-components/progressbar',
                loadChildren: () => import('./pages/bootstrap-components/progressbar/progressbar.module').then(m => m.ProgressbarPageModule)
            },
            {
                path: 'bootstrap-components/rating',
                loadChildren: () => import('./pages/bootstrap-components/rating/rating.module').then(m => m.RatingPageModule)
            },
            {
                path: 'bootstrap-components/sortable',
                loadChildren: () => import('./pages/bootstrap-components/sortable/sortable.module').then(m => m.SortablePageModule)
            },
            {
                path: 'bootstrap-components/tabs',
                loadChildren: () => import('./pages/bootstrap-components/tabs/tabs.module').then(m => m.TabsPageModule)
            },
            {
                path: 'bootstrap-components/timepicker',
                loadChildren: () => import('./pages/bootstrap-components/timepicker/timepicker.module').then(m => m.TimepickerPageModule)
            },
            {
                path: 'bootstrap-components/tooltips',
                loadChildren: () => import('./pages/bootstrap-components/tooltips/tooltips.module').then(m => m.TooltipsPageModule)
            },
            {
                path: 'bootstrap-components/typeahead',
                loadChildren: () => import('./pages/bootstrap-components/typeahead/typeahead.module').then(m => m.TypeaheadPageModule)
            },


            // Charts and Maps
            {
                path: 'charts-maps/charts',
                loadChildren: () => import('./pages/charts-maps/charts/charts.module').then(m => m.ChartsModule)
            },
            {
                path: 'charts-maps/maps',
                loadChildren: () => import('./pages/charts-maps/maps/maps.module').then(m => m.MapsModule)
            },


            // Photo Gallery
            {
                path: 'photo-gallery',
                loadChildren: () => import('./pages/photo-gallery/photo-gallery.module').then(m => m.PhotoGalleryModule)
            },


            // Sample Pages
            {
                path: 'sample-pages/profile',
                loadChildren: () => import('./pages/sample-pages/profile/profile.module').then(m => m.ProfileModule)
            },
            {
                path: 'sample-pages/messages',
                loadChildren: () => import('./pages/sample-pages/messages/messages.module').then(m => m.MessagesModule)
            },
            {
                path: 'sample-pages/contacts',
                loadChildren: () => import('./pages/sample-pages/contacts/contacts.module').then(m => m.ContactsModule)
            },
            {
                path: 'sample-pages/new-contact',
                loadChildren: () => import('./pages/sample-pages/new-contact/new-contact.module').then(m => m.NewContactModule)
            },
            {
                path: 'sample-pages/groups',
                loadChildren: () => import('./pages/sample-pages/groups/groups.module').then(m => m.GroupsModule)
            },
            {
                path: 'sample-pages/pricing-tables',
                loadChildren: () => import('./pages/sample-pages/pricing-tables/pricing-tables.module').then(m => m.PricingTablesModule)
            },
            {
                path: 'sample-pages/invoice',
                loadChildren: () => import('./pages/sample-pages/invoice/invoice.module').then(m => m.InvoiceModule)
            },
            {
                path: 'sample-pages/todo-lists',
                loadChildren: () => import('./pages/sample-pages/todo-lists/todo-lists.module').then(m => m.TodoListsModule)
            },
            {
                path: 'sample-pages/notes',
                loadChildren: () => import('./pages/sample-pages/notes/notes.module').then(m => m.NotesModule)
            },
            {
                path: 'sample-pages/search-results',
                loadChildren: () => import('./pages/sample-pages/search-results/search-results.module').then(m => m.SearchResultsModule)
            },
            {
                path: 'sample-pages/issue-tracker',
                loadChildren: () => import('./pages/sample-pages/issue-tracker/issue-tracker.module').then(m => m.IssueTrackerModule)
            },
            {
                path: 'sample-pages/faq',
                loadChildren: () => import('./pages/sample-pages/faq/faq.module').then(m => m.FaqModule)
            },
            {
                path: 'sample-pages/team',
                loadChildren: () => import('./pages/sample-pages/team/team.module').then(m => m.TeamModule)
            },
            {
                path: 'sample-pages/blog',
                loadChildren: () => import('./pages/sample-pages/blog/blog.module').then(m => m.BlogModule)
            },
            {
                path: 'sample-pages/blog-details',
                loadChildren: () => import('./pages/sample-pages/blog-details/blog-details.module').then(m => m.BlogDetailsModule)
            }

        ]
    },
    {
        path: '',
        component: Layout2Component,
        children: [
              {
                path: 'account/login',
                loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'sample-pages/login',
                loadChildren: () => import('./pages/sample-pages/login/login.module').then(m => m.LoginModule)
            },
            {
                path: 'sample-pages/lockscreen',
                loadChildren: () => import('./pages/sample-pages/lockscreen/lockscreen.module').then(m => m.LockscreenModule)
            },
            {
                path: '404',
                loadChildren: () => import('./pages/sample-pages/four-zero-four/four-zero-four.module').then(m => m.FourZeroFourModule)
            },
            {
                path: '**',
                redirectTo: '/404'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
