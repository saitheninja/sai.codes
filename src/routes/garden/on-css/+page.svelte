<h1 class="heading-size-1 mb-10 leading-tight">On CSS</h1>

<div class="space-y-4">
  <p>
    "pixel perfect" is dumb. Web pages are stretchy. Use min and max, and let
    the browser work it out.
  </p>

  <p>Margins collapse. Padding adds.</p>

  <p>
    Container queries are swag af. They allow you to tune layouts more finely
    than before.
  </p>

  <p>
    Get feedback as fast as possible, so you can fix it before things are built
    on top of it. I like to build things directly in the browser so I can
    immediately see where ideas don't work. (Especially fancy layering things,
    like the <a
      href="https://github.com/saitheninja/sai.codes/blob/main/src/lib/Header.svelte"
      >header</a
    > of this site.)
  </p>

  <h2 class="heading-size-2 pt-4">Tailwind Specific</h2>

  <p>
    It's fast to play with designs, and you know you aren't fucking up the rest
    of the site by changing global CSS. Just doing combinations of static
    utility classes.
  </p>

  <p>Tailwind sets useful media queries.</p>

  <p>Design all layouts from smallest screen to biggest screen.</p>

  <p>
    Build everything in one page and then abstract into components once the
    patterns become obvious.
  </p>

  <p>
    Use margin for fine-tuning specific content, like text or logos. First use
    <code>gap</code>, <code>space-x</code>, etc.
  </p>

  <p><code>@apply</code> to use Tailwind classes in .css files.</p>

  <p>New coloured shadows are cool.</p>
</div>
