import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PollComponent } from './poll/poll.component';
import { MypollComponent } from './poll/mypoll/mypoll.component';
import { PollPostedComponent } from './poll/poll-posted/poll-posted.component';
import { CreatePollComponent } from './poll/create-poll/create-poll.component';
import { PollDetailComponent } from './poll/poll-detail/poll-detail.component';
import { PollchartComponent } from './poll/pollchart/pollchart.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { LogininRouteGuard } from './services/auth.guard';

import { Routes, RouterModule } from '@angular/router';

const appRouter: Routes = [
  {
    path: "", redirectTo: "poll", pathMatch: "full"
  },
  {
    path: "home", component: HomeComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: 'poll', component: PollComponent, children: [
      { path: '', component: CreatePollComponent, canActivate: [LogininRouteGuard], },
      { path: 'my-polls', component: MypollComponent, canActivate: [LogininRouteGuard], },
      { path: ':id', component: PollDetailComponent },
      { path: 'chart/:id' , component : PollchartComponent},
      { path: 'posted/:id', component: PollPostedComponent, canActivate: [LogininRouteGuard], },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRouter)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { };
