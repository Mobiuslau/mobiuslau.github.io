---
title: Jubeat Markers
author: Amy
updated: 18 October 2022
---
# Jubeat Markers
{:.no_toc}

W.I.P.

Documentation about Jubeat markers and effects, as well as how to use them in Jubeat Analyser.

{% include article_block.html %}

### Table of Contents
{:.no_toc}

> - this unordered seed list will be replaced by toc as unordered list
> {:toc}


### Glossary

|Term|Abbreviation|Meaning|
|:-|:-|:-|
|Effect||Animation after hit, which depends on hit accuracy.|
|Marker||Approaching animation, sometimes with "touch" appearing. |

**Table 1:** Glossary used in this article.



## Introduction

W.I.P.



## Jubeat Analyser 160325

### Image Format

W.I.P.

### Markerfile

W.I.P.



## Markers 

Click the previews to be redirected to the fullsize marker images. Save the markers according to the table in  the marker folder inside the img folder for Jubeat Analyser, such that they are in the `/img/markers/` folder. Then write to `/img/markerlist.txt` according to the table.

Some markers in this list were custom made. For those markers, no source is given. The custom markers were designed in vector format, and exported to png. These markers are stored along with this page.

The other markers in the list are not stored on this page, and are instead being referred to their source with hyperlinks. Click on the `source` link to go to the source page of these markers.

<table>
    <thead>
        <tr>
            <th colspan=2>Information</th>
            <th>Marker</th>
            <th colspan=2>Effects</th>
        </tr>
    </thead>
    <tbody>
    {% for marker in site.data.jubeat_analyser_markers_markers %}
        <tr>
        	<td>{{ marker.name }}</td>
            <td>{{ marker.desc }}</td>
            <td rowspan=5>
            	<a href="{{ marker.href }}">
            		<img src="{{ marker.href }}" alt="" width="256"/>
            	</a>
            </td>
            <td rowspan=2>
            	<a href="{{ marker.href3 }}">
            		<img src="{{ marker.href3 }}" alt="" width="80"/>
            	</a>
            </td>
            <td rowspan=2>
            	<a href="{{ marker.href2 }}">
            		<img src="{{ marker.href2 }}" alt="" width="80"/>
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
            	<a href="{{ marker.href1 }}">
            		<img src="{{ marker.href1 }}" alt="" width="80"/>
            	</a>
            </td>
            <td rowspan=2>
            	<a href="{{ marker.href0 }}">
            		<img src="{{ marker.href0 }}" alt="" width="80"/>
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