# <a href="http://aaronssky.duapp.com/aScrollSpy/">aScrollSpy</a>

<h2>Introduction</h2>
<p><strong>aScrollSpy</strong> is a plugin based on jQuery can make effects when scrolling to the position of the targets.</p>

<h2>Usage</h2>
<h3>Including file:</h3>
<div class='highlight highlight-html'>
  <pre>
    <code><<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../jQuery.min.js<span class="pl-pds">"</span></span>></<span class="pl-ent">script</span>></code>
    <code><<span class="pl-ent">script</span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../aScrollSpy.min.js<span class="pl-pds">"</span></span>></<span class="pl-ent">script</span>></code>
  </pre>
</div>
<h3>Html code</h3>
<pre>
    <code>
    <ul id="nav">
        <li><a href="javascript:void(0);" id="a_1">1</a></li>
        <li><a href="javascript:void(0);" id="a_2">2</a></li>
        <li><a href="javascript:void(0);" id="a_3">3</a></li>
        <li><a href="javascript:void(0);" id="a_4">4</a></li>
        <li><a href="javascript:void(0);" id="a_5">5</a></li>
        <li><a href="javascript:void(0);" id="a_6">6</a></li>
        <li><a href="javascript:void(0);" id="a_7">7</a></li>
        <li><a href="javascript:void(0);" id="a_8">8</a></li>
        <li><a href="javascript:void(0);" id="a_9">9</a></li>
        <li><a href="javascript:void(0);" id="a_10">10</a></li>
    </ul>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_1">锚点1</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_2">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_3">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_4">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_5">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_6">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_7">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_8">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_9">锚点</a>
    <Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br><Br>
    <a class="J_Anchor" href="javascript:void(0);" data-spyname="a_10">锚点</a>
    </code>
  </pre>
<h3>JS code</h3>
