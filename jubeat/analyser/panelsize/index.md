---
cite: site.data.jubeat_analyser_panelsize_biblio
---
# Jubeat Analyser Panelsize

W.I.P.

<br>

### Table of Contents

> [Jubeat Analyser Panelsize](#jubeat-analyser-panelsize)<br>
> &nbsp; &nbsp; [Table of Contents](#table-of-contents)<br>
> [Jubeat Screen Dimensions](#jubeat-screen-dimensions)<br>
> [Jubeat Analyser](#jubeat-screen-dimensions)<br>
> &nbsp; &nbsp; [Configuration File](#configuration-file)<br>
> &nbsp; &nbsp; [Object Resolutions](#object-resolutions)<br>
> [Bibliography](#bibliography)<br>

<br>



## Jubeat Screen Dimensions

Only the first 5 lines are used.
Default values (in pixels):
100	(a): Panelsize
15	(b): Space between panels
8	(c): Left Right outer edge
0	(d): Top bottom outer edge
1	(e): Enlarge/reduce (0 is better for playing, 1 is better for watching)

The base playfield size is (a+b)*pw+b horizontally and (a+b)*ph+b vertically where pw is the number of panels horizontally and ph is the number of panels vertically. Thus, If c=0, then the left and right outer edges = b, so c and d add padding. Thus, the background images would have to have this resolution.

=======================================================

<img src="Jubeat - Screen Dimensions - PNG.png" alt="Jubeat - Screen Dimensions - PNG" width="700"/>

<p><strong>Figure 1:</strong> Jubeat screen object dimensions. Total screen dimensions are \( 768 \times 1360 \, \text{px} \) [1].</p>

<br>

Based off of Jubeat Clan Screenshots, the resolution is (768x1360)px. This corresponds to a=160. But b isn't constant. The middle spacings are 38px,  while the other ones are 37px. The horizontal edges are 8px while the lower edge is 6px.  Horizontally, this makes for (8+160+37+160+38+160+37+160+8)px = 768px. The infodisplay is (768x464)px. The distance between the top game panels and the infodisplay is 138px.

Jubeat Analyser only accepts one b value, so the closest value to AC would be b=37, as this would lead to a resolution of (767x1358)px. Therefore, the base playfield, and thus background images, will be resized to (a+b)*p#+b = ((160+37)*4+37)px = 825px horizontally and vertically. Since we would want the vertical edges to be 8px, c = 8-37 = -29. In my case I chose to apply the same value to d. 


Might not be true for c,d = 0:
The infodisplay should now be (767x463)px, but Jubeat Analyser forces (767x439)px or (767x432)px? Keep this in mind when skinning.

Suitable values are;
160
37
-29
-29
0

Recommended values though are;
160
37
0
0
0

as then the infodisplay can have the correct size. To summarize;
- Desired Jubeat Analyser resolution: (767x1358)px.
- Corresponding base playfield resolution: (825x825)px.
- Practical/desired playfield resolution: (767x767)px.
- Corresponding base infodisp resolution: (825x454)px.
- Practical/desired infodisp resolution: (768x464)px.

<br>



## Bibliography

<table>
    <thead>
    </thead>
    <tbody>
    	<tr>
    		<td>[1]</td>
    		<td>“「jubeat clan」が稼働開始。‘人とつながる’をテーマにしたシリーズ最新作,” 4gamer.NET, 26-Jul-2017. [Online]. Available: <a href="https://www.4gamer.net/games/389/G038903/20170726115/screenshot.html?mode=thumbs">https://www.4gamer.net/games/389/G038903/20170726115/screenshot.html?mode=thumbs</a>. [Accessed: 28-Nov-2021].</td>
    	</tr>
	</tbody>
</table>