<template>
  <div class="container-fluid">
    <hr />
    <div class="text-center title">
      <small>
        <span class="text-danger">Powerd By {{name}}</span> |
        <span class="text-muted">Contact By Email : {{email}}</span>
      </small>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "email"]
};
</script>


