<template functional>
  <table>
    <tr>
      <td>Name: </td>
      <td v-html="props.user.id"></td>
    </tr>
    <tr>
      <td>Karma: </td>
      <td v-html="props.user.karma"></td>
    </tr>
    <tr>
      <td>Posts: </td>
      <td v-html="props.user.submitted.length"></td>
    </tr>
    <tr>
      <td>About: </td>
      <td v-html="props.user.about || 'empty'"></td>
    </tr>
  </table>
</template>

