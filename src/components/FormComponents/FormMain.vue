<template>
<div>
      <table class="ui celled striped center aligned table" id="mainTable">
        <thead>
            <tr>
                <th colspan="2">
                    Konspekt
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
                <td>
                    <input class="ui input" placeholder="Imię i Nazwisko" name="odpowiedzialny"/>
                </td>
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
                <td>
                    <input class="ui input" type="date" name="odpowiedzialny"/>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table class="ui striped table">
                        <thead>
                            <tr>
                                <th>Cele:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jaki cel</td>
                            </tr>
                            <tr>
                                <td>Jaki cel2</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr style="background: none;">
                <td colspan="2">
                   <table class="ui striped table">
                        <thead>
                            <tr>
                                <th colspan="4">Przebieg:</th>
                            </tr>
                            <tr>
                                <th>Lp.</th>
                                <th>Treść</th>
                                <th>Czas</th>
                                <th>Materiały</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1.</td>
                                <td>Jaki pkt</td>
                                <td>30min.</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Jaki pkt2</td>
                                <td>20min.</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </table>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <table class="ui striped table">
                        <thead>
                            <tr>
                                <th>Załączniki:</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jaki załącznik</td>
                            </tr>
                            <tr>
                                <td>Jaki załącznik2</td>
                            </tr>
                        </tbody>
                    </table>
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

@media only screen and (max-width: 767px){
    table:first-child{
        width: 70vw !important;
    }
}
</style>
