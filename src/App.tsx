import React from 'react';
import {Header} from "./Header";
import {ControlPanel} from "./Control/ControlPanel";
import {CreatePost} from "./Posts/CreatePost";
import {ButtonColor} from "./TypeEnums";
import {Button} from "./Buttons/Button";
import {User} from "./Users/User";
import {SpaceContainer} from "./SpaceContent/SpaceContainer";
import {Post} from "./Posts/Post";
import {Sticker} from "./Sticker";
import { mdiCommentQuoteOutline } from '@mdi/js';
import Icon from "@mdi/react";
import {RefDropdown} from "./RefDropdown";






const App: React.FC = () => {
  return (
 <div>
   <Header/>
<ControlPanel/>
     <RefDropdown content={<div>Test</div>} trigger={<div>Click</div>}/>
<Post name={"Ilya Tormanov"}
      tag={"@QqweAS4"}
      content={"Комитет по культуре потребовал справку о том, что Борис Стругацкий является писателем\n" +
      "\n" +
      "«Друзья и коллеги, меня, в общем, трудно удивить, но...\n" +
      "\n" +
      "На протяжении длительного времени вместе с Кириллом Страховым Кирилл Страхов занимаемся установкой мемориальной доски Борису Натановичу Стругацкому на доме 4 по улице Победы, где он много лет жил."}/>
<CreatePost/>
<User name={"Ilya Tormanov"} tag={"@QqweAS4"}/>
 </div>

  );
}

export default App;
