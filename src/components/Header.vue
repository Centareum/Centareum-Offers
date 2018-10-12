<template>
        <header id="basix-header" class="header">

            <div class="header-menu">
                <div class="row">
                    <div class="col-sm-7">

                        <div class="header-left" :class="{'open': isSearch, '': !isSearch }">


                            <div class="form-inline">
                                <form class="search-form">
                                    <input class="form-control mr-sm-2" type="text" placeholder="Search ..." aria-label="Search">

                                </form>
                            </div>

                            <div class="dropdown for-notification">


                            </div>

                            <div class="dropdown for-message">
                                <button
                                    class="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="message"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    :class="{'message-show': isMessage, '': !isMessage }"
                                    @click="handleMessage"
                                >
                                </button>
                                <div class="dropdown-menu" aria-labelledby="message">
                                    <p class="red">You have 4 Mails</p>
                                    <a class="dropdown-item media bg-flat-color-1" href="#">
                                        <div class="message media-body">
                                            <span class="name float-left text-light">Jonathan Smith</span>
                                            <span class="time float-right text-light">Just now</span>
                                            <p class="text-light">Hello, this is an example msg</p>
                                        </div>
                                    </a>
                                    <a class="dropdown-item media bg-flat-color-4" href="#">
                                        <span class="photo media-left"><img alt="avatar" src="../images/avatar/2.jpg"></span>
                                        <div class="message media-body">
                                            <span class="name float-left text-light">Jack Sanders</span>
                                            <span class="time float-right text-light">5 minutes ago</span>
                                            <p class="text-light">Lorem ipsum dolor sit amet, consectetur</p>
                                        </div>
                                    </a>
                                    <a class="dropdown-item media bg-flat-color-5" href="#">
                                        <span class="photo media-left"><img alt="avatar" src="../images/avatar/3.jpg"></span>
                                        <div class="message media-body">
                                            <span class="name float-left text-light">Cheryl Wheeler</span>
                                            <span class="time float-right text-light">10 minutes ago</span>
                                            <p class="text-light">Hello, this is an example msg</p>
                                        </div>
                                    </a>
                                    <a class="dropdown-item media bg-flat-color-3" href="#">
                                        <span class="photo media-left"><img alt="avatar" src="../images/avatar/4.jpg"></span>
                                        <div class="message media-body">
                                            <span class="name float-left text-light">Rachel Santos</span>
                                            <span class="time float-right text-light">15 minutes ago</span>
                                            <p class="text-light">Lorem ipsum dolor sit amet, consectetur</p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-5">
                        <div class="user-area dropdown float-right">
                            <a href="#"
                                class="dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                :class="{'show': isActive, '': !isActive }"
                                @click="handleClick"
                            >
                                <img class="user-avatar rounded-circle" src="../images/avatar.png" alt="User Avatar">
                            </a>


                        </div>




                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </header><!-- /header -->
</template>


<script>
    export default {
    name: 'basix-header',
    data (){
      return{
        isActive: false,
        isFlag: false,
        isMessage: false,
        isNotification: false,
        isSearch: false,
        isOpen: false
      }
    },
    methods: {
        toggle(e){
            //this.isOpen = !this.isOpen
            e.target.parentElement.classList.toggle('close')
        },
        handleClick(e){
            this.isActive = !this.isActive;
            // if(e.target.className == "noclass"){
            //     e.target.className = "link active";
            // } else{
            //     e.target.className = "noclass";
            // }
        },
        searchClick (e) {
          this.isSearch = !this.isSearch;
        },
        handleMessage (e) {
          this.isMessage = !this.isMessage;
        },
        handleNotification (e) {
          this.isNotification = !this.isNotification;
        },
        handleFlag (e) {
          this.isFlag = !this.isFlag;
        }

      }
    }
</script>

<style>
    header .form-inline .search-form button{
        cursor: pointer;
    }
</style>
