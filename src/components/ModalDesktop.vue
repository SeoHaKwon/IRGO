<template>
    <transition name="modal">
    <div
        class="ModalSkeleton modal-mask"
    >
        <div
            class="modal-wrapper"
        >
            <div
                class="modal-container"
            >
                <slot
                    v-if="$slots.body"
                    class="modal-body"
                    name="body"
                >
                </slot>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>

export default {
    name: 'ModalSkeleton',
    props: {
        modalContainerClass: {
            type: Object,
            default() {
                return {};
            }
        },
        clickOpenManual: {
            default() {
                return false;
            }
        },
    },
    watch: {
    },
    created() {

    },
    mounted() {
    },
    components: {
    },
    computed: {
    },
    methods: {
    }
};
</script>

<style lang="scss">
    .ModalSkeleton.modal-mask {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 255, 255, 0.9);
        z-index: 9999999;
        display: flex;
        justify-content: center;
        align-items: center; 


        .modal-wrapper {
            width: 1000px;
            padding: 90px 118px;
            border: 1px solid #C7C7CC;
            border-radius: 6px;
            background: #fff;
            max-height: 90%;
            overflow-y: auto;
            position: relative;
        }

        @media (min-width: 900px) and (max-width: 1149px) {
          .modal-wrapper {
              width: 70%;
              padding: 90px 118px;
              border: 1px solid #C7C7CC;
              border-radius: 6px;
              background: #fff;
              max-height: 90%;
              overflow-y: auto;
              position: relative;
          }
        }

        @media ( max-width: 899px ) {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 1);
            z-index: 9999999;
            display: block;
            justify-content: center;
            align-items: center; 


            .modal-wrapper {
                width: 100%;
                padding: 0 16px 30px 16px;
                border: 0;
                border-radius: 6px;
                background: #fff;
                height: 100%;
                overflow-y: auto;
            }
        }
    }
</style>
