import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LevelbarComponent } from './levelbar/levelbar.component';
import { QuestComponent } from './quest/quest.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {QuestService} from './services/quest-service';
import {LevelService} from './services/level-service';
import { AddQuestComponent } from './add-quest/add-quest.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LevelbarComponent,
    QuestComponent,
    ProfileComponent,
    SettingsComponent,
    DashboardComponent,
    AddQuestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    QuestService,
    LevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
