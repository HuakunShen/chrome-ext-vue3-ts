<template>
  <div class="home">
    <button v-on:click="sendMsg">Send Test Message to Content Script</button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/ui/components/HelloWorld.vue'; // @ is an alias to /src
import { sendTestMsg } from '@/ui/utils/chromeHelper';
import { log } from '@/core/util';
export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    sendMsg() {
      log('sent message');
      sendTestMsg();
    },
  },
});
</script>
