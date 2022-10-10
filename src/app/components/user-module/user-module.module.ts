import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { AuthGuard } from '../../auth.guard';
import { FormsModule } from '@angular/forms';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { EditUserProfileComponent } from './edit-user-profile/edit-user-profile.component'


const routes: Routes= [
  {path:'', redirectTo:'/user/userprofile', pathMatch:'full' },
  {path: 'userprofile', component:UserProfileComponent, canActivate: [AuthGuard]},
  {path: 'edituserprofile', component:EditUserProfileComponent, canActivate: [AuthGuard]},

]

@NgModule({
  declarations: [
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModuleModule { }
