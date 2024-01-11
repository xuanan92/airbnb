# React + Vite
structure/states/ routes

# Api:
rooms/
rooms/:roomId

# App (/)
  PrimaryLayout.jsx (/) --layout
    Header
      Logo 
      SearchGroup
        SearchModal
          SearchHeader
            Logo 
            AvaGroup
          SearchForm (states)
            FormInputs
            SearchRegions (props and functions change) [f1]
            SearchDateRange
            SearchGuests
          BlackModal
      AvaGroup
    Navigator
    Outlet
      RoomsList (/rooms)
        RoomExcerpt
        ImgSlide
      AddRoom (/rooms/addroom)
      SingleRoom (/rooms/roomId)
        EditRoom (/rooms/roomId/edit)
        Account (/rooms/account-settings)
    GetAways --comp
    Footer --comp
  SecondaryLayout.jsx (/) --layout
    Giftcards (/giftcards) 
    Redeem (/gift) --layout

feature list:
f1: handler key arrow up and down to select option
