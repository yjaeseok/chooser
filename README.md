# <img width="36px" src="./assets/images/icon.png"/> 누가쏴
<p align="center">
  <img src="http://img.shields.io/:license-mit-green.svg"/>
  <img src="https://img.shields.io/badge/platform-bixby-blue.svg"/>
  <img src="https://img.shields.io/badge/language-javascript-brightgreen.svg"/>
</p>

"누가쏴는 언제 어디서 누구나 간편하게 즐길 수 있는 복불복 게임 캡슐입니다."

#### 대표발화

> 1. "누가쏴에서 복불복 게임 시작"
> 2. "누가쏴에서 5인용 복불복 게임 시작"
> 3. "누가쏴에서 선택 게임 시작"

#### 동작 순서

### STEP 1. 실행
> 대표발화 "누가쏴에서 복불복 게임 시작" 을 외치면 빅스비가 "몇분이 게임을 진행하시나요?" 라고 묻게됩니다.
> 그 이유는 StartChooser가 CreateChooser를 통해 Chooser를 생성하는데, Chooser의 NumPlayer가 없기 때문입니다.
> 따라서 NumPlayer를 추가하기 위해 [resources/base/views/CreateChooser.view.bxb](./resources/base/views/CreateChooser.view.bxb)를 활용해 질문을 하게 됩니다.
> 단, "누가쏴에서 5인용 복불복 게임 시작" 처럼 외치면 5명이 NumPlayer에 적용되어 바로 게임이 시작됩니다.

# 그림으로 STEP 1.의 동작과 결과를 보면 아래와 같습니다.
![]./assets/flow/step1.png"/>![]
![]./assets/flow/step1-view.png"/>![]