# Jubeat Analyser Markers

W.I.P.

Documentation about Jubeat markers and effects, as well as how to use them in Jubeat Analyser.

<br>

### Table of Contents

> [Jubeat Analyser Markers](#jubeat-analyser-markers)<br>
> &nbsp; &nbsp; [Table of Contents](#table-of-contents)<br>
> &nbsp; &nbsp; [Glossary](#glossary)<br>
> [Introduction](#introduction)<br>
> [Jubeat Analyser 160325](#jubeat-analyser-160325)<br>
> &nbsp; &nbsp; [Image Format](#image-format)<br>
> &nbsp; &nbsp; [Markerfile](#markerfile)<br>
> [Markers](#markers)<br>


<br>

### Glossary

|Term|Abbreviation|Meaning|
|:-|:-|:-|
|Effect||Animation after hit, which depends on hit accuracy.|
|Marker||Approaching animation, sometimes with "touch" appearing. |

**Table 1:** Glossary used in this article.

<br>

## Introduction

W.I.P.

<br>

## Jubeat Analyser 160325

### Image Format

W.I.P.

<br>

### Markerfile

W.I.P.

<br>

## Markers 

Click the previews to be redirected to the fullsize marker images. Save the markers according to the table in  the marker folder inside the img folder for Jubeat Analyser, such that they are in the `/img/markers/` folder. Then write to `/img/markerlist.txt` according to the table.

<table>
    <thead>
        <tr>
            <th colspan=2>Information</th>
            <th>Marker</th>
            <th colspan=2>Effects</th>
        </tr>
    </thead>
    <tbody>
    {% for marker in site.data.markers %}
        <tr>
        	<td>{{ marker.name }}</td>
            <td>{{ marker.desc }}</td>
            <td rowspan=5>
            	<a href="{{ marker.href }}">
            		<img src="{{ marker.href }}" alt="" width="256"/>
            	</a>
            </td>
            <td rowspan=2>
            	<a href="{{ marker.href0 }}">
            		<img src="{{ marker.href0 }}" alt="" width="80"/>
            	</a>
            </td>
            <td rowspan=2>
            	<a href="{{ marker.href1 }}">
            		<img src="{{ marker.href1 }}" alt="" width="80"/>
            	</a>
            </td>
        </tr>
        <tr>
            <td rowspan=3 colspan=2>
<pre>{% if marker.drawtype_e %}*drawtype_e:{{ marker.drawtype_e }}{% endif %}
{% if marker.href0 %}*effect(0):markers/{{ marker.name }}_0.{{ marker.format_e }}{% endif %}
{% if marker.href1 %}*effect(1):markers/{{ marker.name }}_1.{{ marker.format_e }}{% endif %}
{% if marker.href2 %}*effect(2):markers/{{ marker.name }}_2.{{ marker.format_e }}{% endif %}
{% if marker.href3 %}*effect(3):markers/{{ marker.name }}_3.{{ marker.format_e }}{% endif %}
*drawtype:{{ marker.drawtype }}
markers/{{ marker.name }}.{{ marker.format }}</pre>
            </td>
        </tr>
        <tr>
        	<td rowspan=2>
            	<a href="{{ marker.href2 }}">
            		<img src="{{ marker.href2 }}" alt="" width="80"/>
            	</a>
            </td>
            <td rowspan=2>
            	<a href="{{ marker.href3 }}">
            		<img src="{{ marker.href3 }}" alt="" width="80"/>
            	</a>
            </td>
        </tr>
        <tr></tr>
        <tr>
        	<td colspan=2><a href="{{ marker.source }}">{% if marker.source %}Source{% endif %}</a></td>
            <td></td>
            <td></td>
        </tr>   
        <tr>
            <td colspan="5" style="border-top: 1px solid #e5e5e5;"></td>
        </tr>  
        {% endfor %}     
    </tbody>
</table>

**Table 2:** Publically available markers.
