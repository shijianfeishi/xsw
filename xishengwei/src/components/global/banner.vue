<template>
    <div>
         <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>//
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
    </div>
</template>

<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    
    export default {
         data() {
            return {
                swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
                // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                notNextTick: true,
                // swiper configs 所有的配置同swiper官方api配置
                autoplay: 3000,
                direction : 'vertical',
                grabCursor : true,
                setWrapperSize :true,
                autoHeight: true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                prevButton:'.swiper-button-prev',//上一张
                nextButton:'.swiper-button-next',//下一张
                scrollbar:'.swiper-scrollbar',//滚动条
                mousewheelControl : true,
                observeParents:true,
                // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                debugger: true,
                }
            }
         },
        mounted() {
            // var swiper = new Swiper('.swiper-container', {
            //     pagination: '.swiper-pagination',
            //     paginationType : 'fraction',
            //     paginationClickable: true,
            //     // loop: true,
            //     // speed: 600,
            //     // autoplay: 4000,
            //     // onTouchEnd: function() {
            //     //     swiper.startAutoplay()
            //     // }
            //     paginationClickable: true,
            //     paginationBulletRender: function (swiper, index, className) {
            //         return '<span class="' + className + '">' + (index + 1) + '</span>';
            //     }
            // });
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style>
    .bannerinit{
        width: 0.3rem;
        height: 0.3rem;
    }
    .swiper-container {
        width: 100%;
        height: 3.5rem;
    }
    .swiper-wrapper {
        width: 100%;
        height: 100%;
    }
    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .swiper-slide img {
        width: 100%;
        height: 100%;
    }
    .swiper-pagination-bullet {
        width:0.833rem;
        height: 0.833rem;
        display: inline-block;
        background: #7c5e53;
    }
    /* .swiper-pagination{
        background: #999;
        bottom: 40px;
    } */
</style>