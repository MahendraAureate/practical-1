<template>
    <div>
        <template v-for="product in products">
            <div v-if="product.id == productid" :key="product.id">
                <div class="product__item-single" >
                    <h3 class="product__item-title"> {{product.ProductTitle}} </h3>
                    <p class="product__item-desc">{{product.ProdutDesc}}</p>
                    <div class="product__item-image">
                        <img :src="product.productImage" alt="">
                    </div>
                </div>
                <div class="go-to-product-list">
                    <router-link to="/product"> Go Back</router-link>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import productdata  from '../data/product.json'

export default {
    data() {
        return {
            products: productdata      
        }
    },
    computed:{
        productid(){
            console.log(this.$route);
            return this.$route.params.pid;
        }
    }

}
</script>

<style scoped>
.go-to-product-list{
    margin-top: 15px;
}
.go-to-product-list a{
    transition: 0.3s;
    text-decoration: none;
    color: rgb(66 185 131);
}
.go-to-product-list a:hover{
    color: #212121;
}
</style>