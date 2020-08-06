<template>
    <section>
    <b-container>
        <!-- Hunt -->
        <div class="row">
            <div class="col-4">
                  <b-button squared @click="huntHandler">Icon <br /> Hunt</b-button>
            </div>
            <div class="col-8">
                Information on action
            </div>
        </div>

        <!-- Church -->
        <div class="row">
            <div class="col-4">
                  <b-button squared>Icon <br /> Church</b-button>
            </div>
            <div class="col-8">
                Information on action
            </div>
        </div>

        <!-- Rest -->
        <div class="row">
            <div class="col-4">
                <b-button squared>Icon <br /> Rest</b-button>
            </div>
            <div class="col-8">
                Information on action
            </div>
        </div>

        <!-- Gather -->
        <div class="row">
            <div class="col-4">
                <b-button squared>Icon <br /> Gather</b-button>
            </div>
            <div class="col-8">
                Information on action
            </div>
        </div>

        <!-- Brew -->
        <div class="row">
            <div class="col-4">
                <b-button squared>Icon <br /> Brew</b-button>
            </div>
            <div class="col-8">
                Information on action
            </div>
        </div>
    </b-container>
    </section>
</template>

<script>
import {Actions} from "../methods/actions.js";

export default {
  name: "actionsBox",
  data() {
  },
  methods:{
    huntHandler: function(){
      Actions.hunt();
    }
  }
};
</script>