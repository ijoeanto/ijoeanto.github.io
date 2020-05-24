Vue.component('social-sharing', {
    data: function() {
        return {
            url: 'https://vuejs.org/',
            title: 'Ini uji coba share ke WA man'
        }
    },
    template: `
    <div>
        <network network="whatsapp">Whatsapp</network>
    </div>
    `
});

var dataUcapan = {
    ucapans: [
        {
            "image": "images/lebaran1.jpg",
            "label1": "Taqobbalallahu Minna Wa Minkum",
            "animate1": "animate__animated animate__jackInTheBox animate__slow font1",
            "label2": "Semoga Allah menerima amalan kami \ndan amalan kamu",
            "animate2": "animate__animated animate__zoomInDown animate__slow animate__delay-2s text-warning font1",
            "isActive": true,
        },
        {
            "image": "images/lebaran2.png",
            "label1": "Shiyamana Wa Shiyamakum",
            "animate1": "animate__animated animate__rotateInUpLeft animate__slow text-danger font1",
            "label2": "Puasa kami dan Puasa kamu",
            "animate2": "animate__animated animate__rotateInUpRight animate__slow animate__delay-2s text-danger font1",
            "isActive": false,
        },
        {
            "image": "images/lebaran3.png",
            "label1": "Selamat Hari Raya Idul Fitri 1441 H",
            "animate1": "animate__animated animate__slideInLeft animate__slow text-primary font1",
            "label2": "Mohon Maaf Lahir dan Batin",
            "animate2": "animate__animated animate__slideInRight animate__slow animate__delay-2s text-primary font1",
            "isActive": false,
        },
    ]
}
var dataPraying = {
    prayings: [
        {
            "image": "images/praying1.jpg",
            "isActive": true,
        },
        {
            "image": "images/praying2.jpg",
            "isActive": false,
        },
        {
            "image": "images/praying3.jpg",
            "isActive": false,
        },
        {
            "image": "images/praying4.jpg",
            "isActive": false,
        },
    ]
}

var app = new Vue({
    el: '#app',
    data: {
        dataUcapan : dataUcapan,
        dataPraying : dataPraying,
        classImageSP : 'mr-3 rounded-top animate__animated animate__tada logo-on',
        name : '',
        family: '',
        pesan: ''
    },
    mounted() {
        // console.log(new URL(location.href).searchParams.get('n'));
        this.family = new URL(location.href).searchParams.get('n');
        document.title = this.family==null ? 'Ied Mubarak' : this.family;
        var audio = new Audio('audio/takbiran.mp3');
        audio.play();

    },
    methods: {
        goSPOnline : function(){
            window.location.href = "https://sensus.bps.go.id"
        },
        clickOff : function(){
            this.classImageSP = 'mr-3 rounded-top animate__animated animate__bounce logo-off'
        },
        clickOn : function(){
            this.classImageSP = 'mr-3 rounded-top animate__animated animate__tada logo-on'
        },
        updateMessage : function(){
            let s = window.location.href.split('?');
            let str = 'Mari saling bermaafan dengan mengklik tautan berikut: ' + s[0];
            this.family = this.name;
            this.pesan = 'whatsapp://send?text=' + encodeURI(str + '?n=' + encodeURI(this.name));
        }
    }
});