

    function AddClass () {
        
        humbergerIcon = document.getElementsByClassName ("humbergerIcon")

        ContainerPofile = document.getElementsByClassName  ("ContainerPofile")


        ContainerPofile.classList.add ('show')

    }


    function Load () {
        
        document.getElementById ("loadID").classList.add ("Loadoff")

    }
            setTimeout (Load, 5000);