<template>
  <div class="JoinContainer">
	  	<Splash
	  		v-if="isSplash"
	  	/>
	  	<AgreeTermsCertification
	  		v-if="isAgreeCertification"
	  		:isAgreeCertification="isAgreeCertification"
	  		:isUserType="isUserType"
	  	 />
	  	<UserType
	  		v-if="isUserType"
	  	/>
  </div>
</template>
<script>
import Splash from '@/components/join/Splash.vue'
import AgreeTermsCertification from '@/components/join/AgreeTermsCertification.vue'
import UserType from '@/components/join/UserType.vue'

export default {
    name: 'JoinContainer',
    components: {
    	Splash,
    	AgreeTermsCertification,
    	UserType
    },
    data() {
        return {
        	isSplash: true,
        	isAgreeCertification: false,
        	isUserType: false,
        };
    },
    props: [
    ],
    filters: {
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created() {
    },
    mounted() {
    	setTimeout(() => {
    		this.isSplash = false;
    		this.isAgreeCertification = true;
    	}, 2000)
    },
};
</script>
<style lang="scss">
.JoinContainer {
	.section-title {
	    font-size: 20px;
	    letter-spacing: -0.5px;
	    color: #313439;
	}
}
</style>
