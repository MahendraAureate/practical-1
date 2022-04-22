<template>
    <div class="container">
        <div class="row">
            <div class="col-md-4 product__item_parent" v-for="product in products" :key="product.id" >
                <!-- <div class="product-item" @mouseover="isHover = true" @mouseleave="isHover = false"> -->
                <div class="product-item" @mouseover="hoverCard(product.id)" @mouseout="hoverCard(-1)">
                    <img :src="product.productImage" alt="">
                    <router-link :to="'product/'+product.id">
                        <div class="down-content" :class="{'selected': isSelected(product.id)}">
                            <h4>{{product.ProductTitle}}</h4>
                            <p>{{product.ProdutDesc}}</p>
                        </div>
                    </router-link>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import productdata  from '../data/product.json'

export default {
    data() {
        return {
            selectedCard : -1,
            products : productdata,
        }
    },
    methods: {
        
        hoverCard(selectedIndex){
             this.selectedCard = selectedIndex
        },

        isSelected(cardIndex){
            return this.selectedCard === cardIndex
        }
    },
}
</script>

<style scoped>

.product-item{
    position: relative;
    height: 300px;
    margin-bottom: 25px;
}
.product-item img{
   width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
}

.down-content {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: rgb(66 185 131 / 90%);
    color: #212121;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.5s;
    padding: 0 10px;
    
}
.selected{
    opacity: 1;
    visibility: visible;
}
.down-content a{
    color: #212121;
    text-decoration: none;
}


.hovering{
    font-size: 12px;
}
</style>