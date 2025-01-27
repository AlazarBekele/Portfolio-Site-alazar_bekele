

    function SideBarHumMenu () {
            
        document.getElementById ("ContainerPofileID").classList = ("takeOut")

        document.getElementById ("sidebarContainerID").classList = ("increaseWid")

        document.getElementById ("humbergerIcon").classList = ("off")

        document.getElementById ("cancleID").classList = ("on")

    }

    function removeClass () {

        document.getElementById ("sidebarContainerID").classList = ("increaseWidCan")

        document.getElementById ("ContainerPofileID").classList = ("takeOutCan")

    }


    function Load () {
        
        document.getElementById ("loadID").classList.add ("Loadoff")

    }
            setTimeout (Load, 5000);