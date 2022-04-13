<template>
    <label>
        <span>割り材</span>
        <select name="mixer-name">
            <option value="unselected" selected>未選択</option>
            <option value="milk - ">牛乳</option>
            <option value="soda - ">炭酸水</option>
            <option value="oolong - ">烏龍茶</option>
            <option value="coke - ">コーラ</option>
            <option value="ginger - ">ジンジャエール</option>
            <option value="orange - ">オレンジジュース</option>
            <option value="apple - ">アップルジュース</option>
            <option value="pine - ">パイナップルジュース</option>
        </select>
        <select name="mixer-quantity" @change="showMoreQuantity()">
            <option value="unselected" selected>未選択</option>
            <option value="30mL">30mL</option>
            <option value="45mL">45mL</option>
            <option value="60mL">60mL</option>
            <option value="full up">full up</option>
            <option value="other">その他</option>
        </select>
        <input id="mixer-quantity" v-show="moreQuantity" class="hide-input" type="text" required>
    </label>
</template>

<script>
export default {
    props:[
        "completedMixer"
    ],
    data(){
        return{
            moreQuantity: false,
            loop: 0,
        };
    },
    methods: {
        showMoreQuantity() {
            if(document.querySelector('[name="mixer-quantity"]').value == "other") {
                this.moreQuantity = true;
            }else{
                this.moreQuantity = false;
            }
        },
    },
}
</script>

<style>

</style>