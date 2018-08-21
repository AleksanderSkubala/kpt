<template>
<div>
      <table class="ui celled striped center aligned table">
        <thead>
            <tr>
                <th colspan="2">
                Git Repository
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> <!--class="collapsing"-->
                    Nazwa zbiórki:
                </td>
                <td>Initial commit</td>
            </tr>
            <tr>
                <td>
                    Odpowiedzialny/a:
                </td>
                <td>Initial commit</td>
            </tr>
            <tr>
                <td>
                    Prowadący:
                </td>
                <td>Initial commit</td>
            </tr>
            <tr>
                <td>
                    Termin:
                </td>
                <td>Initial commit</td>
            </tr>
            <tr>
                <td colspan="2">
                    Cele:
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    *Tabela z celami*
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    Przebieg:
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    *Tabela z przebiegiem*
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    Załączniki:
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    *Tabela z załącznikami*
                </td>
            </tr>
        </tbody>
    </table>
</div>
</template>

<script>
export default {
    name: "FormMain",
}
</script>

<style lang="scss" scoped>

ul.ui.list li:before{
    content: '';
    display: none;
}

</style>
