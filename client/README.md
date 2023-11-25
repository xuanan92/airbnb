# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Beginner (Todo... 20-30 components)
Intermediate (10-15 pages)
Advance (large scale app)
  src/
    assets/
    components/
    contexts/
    data/
    features/
      auth/
        components/
        services/
        hooks/
        index.js
    lib/
    hooks/
    services/ (service based api call: analytics)
    layouts/
    pages/
    settings/ (or configs)
    utils/

File structure
---
App (/)
  Layout.jsx (/) --layout
  |  Header --comp
  |  Navigator --comp
  |  GetAways --comp
  |  Footer --comp
  |  RoomsList.jsx (/rooms)
     |  RoomExcerpt --comp
     |  ImgSlide --comp
  |  AddRoom (/rooms/addroom)
  |  SingleRoom (/rooms/roomId)
     |  EditRoom (/rooms/roomId/edit)
     |  Account (/rooms/account-settings)
  Giftcards (/giftcards) --layout
  Redeem (/gift) --layout

