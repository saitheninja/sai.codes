import{s as i,n as a}from"../chunks/scheduler.Ck6cZafl.js";import{S as c,i as b,j as n,k as v,m as k,t as m,l as q,n as r,e as p,a as h,g as w,b as u,f,d as g}from"../chunks/index.C0dgLUhg.js";import{A as C}from"../chunks/ArticleBase.B07BcFWY.js";function z(t){let s,e=`<section class="space-y-4"><h2 id="normal-mode" class="heading-size-2">Normal Mode</h2> <section class="space-y-4"><h3 id="jumps" class="heading-size-3">Jumps</h3></section> <hr/> <section class="space-y-4"><h3 id="marks" class="heading-size-3">Marks</h3></section> <hr/> <section class="space-y-4"><h3 id="registers" class="heading-size-3">Registers</h3></section> <hr/> <section class="space-y-4"><h3 id="folds" class="heading-size-3">Folds</h3> <p>Fold level &gt; <code>foldlevel</code> will be closed. Zero (default) will
          close all folds. Local to window.</p> <p>Fold with lines &lt; <code>foldminlines</code> will always be open. Default
          1.</p> <p>Currently using
          <a href="https://github.com/kevinhwang91/nvim-ufo" title="nvim-ufo GitHub repo" target="_blank">nvim-ufo</a> to manage folds.</p> <section class="space-y-4"><h4 id="opening-and-closing-folds" class="heading-size-4">Opening and Closing Folds</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">o</kbd></dt> <dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code> <kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">o</kbd></dt> <dd class="svelte-18o7imq">Open one fold under the cursor.</dd> <dd class="svelte-18o7imq">Open <code>count</code> fold levels under the cursor.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">O</kbd></dt> <dd class="svelte-18o7imq">Open all folds under the cursor.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">c</kbd></dt> <dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code> <kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">c</kbd></dt> <dd class="svelte-18o7imq">Close one fold under the cursor.</dd> <dd class="svelte-18o7imq">Close <code>count</code> folds under the cursor.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">C</kbd></dt> <dd class="svelte-18o7imq">Close all folds under the cursor.</dd></div></dl> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">a</kbd></dt> <dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code> <kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">a</kbd></dt> <dd class="svelte-18o7imq">Toggle one fold under the cursor.</dd> <dd class="svelte-18o7imq">Toggle <code>count</code> fold levels under the cursor.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">A</kbd></dt> <dd class="svelte-18o7imq">Toggle all folds under the cursor.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">v</kbd></dt> <dd class="svelte-18o7imq">View cursor line. Unfold until the line in which the cursor is
                located is not folded.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">x</kbd></dt> <dd class="svelte-18o7imq">Update folds. Undo manually opened and closed folds. Re-apply
                <code>foldlevel</code>, then do <kbd>z</kbd><kbd>v</kbd>. Forces
                recomputing folds.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">X</kbd></dt> <dd class="svelte-18o7imq">Undo manually opened and closed folds. Re-apply
                <code>foldlevel</code>. Forces recomputing folds.</dd></div></dl> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">m</kbd></dt> <dd class="svelte-18o7imq">fold more. Decrease <code>foldlevel</code>.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">M</kbd></dt> <dd class="svelte-18o7imq">Fold most. Set <code>foldlevel</code> to zero, i.e. close all folds.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">r</kbd></dt> <dd class="svelte-18o7imq">Fold reduce. Increase <code>foldlevel</code>.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">R</kbd></dt> <dd class="svelte-18o7imq">Fold reduce to minimum. Set <code>foldlevel</code> to max, i.e. open
                all folds.</dd></div></dl> <dl><div><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">i</kbd></dt> <dd class="svelte-18o7imq">Toggle <code>foldenable</code>.</dd></div></dl></section> <section class="space-y-4"><h4 id="moving-over-folds" class="heading-size-4">Moving Over Folds</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">[</kbd><kbd class="svelte-18o7imq">z</kbd></dt> <dd class="svelte-18o7imq">Move to the start of containing open fold.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">]</kbd><kbd class="svelte-18o7imq">z</kbd></dt> <dd class="svelte-18o7imq">Move to the end of containing open fold.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">k</kbd></dt> <dd class="svelte-18o7imq">Move upwards to the end of the previous fold.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">z</kbd><kbd class="svelte-18o7imq">j</kbd></dt> <dd class="svelte-18o7imq">Move downwards to the start of the next fold.</dd></div></dl></section></section> <hr/> <section class="space-y-4"><h3 id="search" class="heading-size-3">Search</h3> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">/</kbd><code class="svelte-18o7imq">{some text}</code><kbd class="svelte-18o7imq">Enter</kbd></dt> <dd class="svelte-18o7imq">Search forward for <code>some text</code>.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd>n</kbd></dt> <dd class="svelte-18o7imq">Move cursor to next result.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd>N</kbd></dt> <dd class="svelte-18o7imq">Move cursor to previous result.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd><kbd>Ctrl</kbd><span>+</span><kbd>l</kbd></kbd></dt> <dt class="svelte-18o7imq"><code>:mod[e]</code></dt> <dd class="svelte-18o7imq">Clear and redraw screen.</dd> <dd class="svelte-18o7imq">Clears search highlights (<code>:noh[lsearch]</code>) and updates
              diffs (<code>:dif[fupdate]</code>).</dd></div></dl></section> <hr/> <section class="space-y-4"><h3 id="buffers" class="heading-size-3">Buffers</h3> <section class="space-y-4"><h4 id="buffers-create" class="heading-size-4">Create</h4> <dl></dl></section> <section class="space-y-4"><h4 id="buffers-close" class="heading-size-4">Close</h4> <dl></dl></section> <section class="space-y-4"><h4 id="buffers-focus" class="heading-size-4">Focus</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd></dt> <dd class="svelte-18o7imq">Edit alternate file in current window. Usually last edited file.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd></dt> <dd class="svelte-18o7imq">Edit <code>count</code> buffer in current window.</dd></div></dl></section></section> <hr/> <section class="space-y-4"><h3 id="windows" class="heading-size-3">Windows</h3> <div><p>Creating a window will fail if there is not enough room. Every
            window needs at least one screen line and column, sometimes more.</p></div> <div><p>Windows are numbered starting from 1.</p> <p>Windows are numbered from top-left to bottom-right.</p></div> <section class="space-y-4"><h4 id="windows-create" class="heading-size-4">Create</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">s</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">S</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>s</kbd></kbd></dt> <dt class="svelte-18o7imq"><code>:[N]sp[lit] [++opt] [+cmd] {file}</code></dt> <dd class="svelte-18o7imq">Split horizontally.</dd> <dd class="svelte-18o7imq">Make the new window <code>N</code> rows high.</dd> <dd class="svelte-18o7imq">Opens same file buffer if not specified.</dd> <dd class="svelte-18o7imq">Note: <kbd><kbd>Ctrl</kbd><span>+</span><kbd>s</kbd></kbd> does
                not work on all terminals and might block further input. Use
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>q</kbd></kbd> to get going
                again.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">v</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>v</kbd></kbd></dt> <dt class="svelte-18o7imq"><code>:[N]vs[plit] [++opt] [+cmd] {file}</code></dt> <dd class="svelte-18o7imq">Split vertically.</dd> <dd class="svelte-18o7imq">Make the new window <code>N</code> columns wide.</dd> <dd class="svelte-18o7imq">Opens same file buffer if not specified.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">^</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd></dt> <dd class="svelte-18o7imq">Open alternate file in horizontal split.</dd> <dd class="svelte-18o7imq">Matches behaviour of
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>^</kbd></kbd>
                .</dd></div></dl></section> <section class="space-y-4"><h4 id="windows-close" class="heading-size-4">Close</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">c</kbd></dt> <dd class="svelte-18o7imq">Close the current window.</dd> <dd class="svelte-18o7imq">Fails if there is only one window.
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd>q</kbd>
                will close last window and exit, so this is safer.</dd> <dd class="svelte-18o7imq"><kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd><kbd>Ctrl</kbd><span>+</span><kbd>c</kbd></kbd>
                does not work, because the
                <kbd><kbd>Ctrl</kbd><span>+</span><kbd>c</kbd></kbd>
                cancels the command.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">o</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>o</kbd></kbd></dt> <dd class="svelte-18o7imq">Keep only active window, closing all others.</dd></div></dl></section> <section class="space-y-4"><h4 id="windows-focus" class="heading-size-4">Focus</h4> <p>Cursor will cycle from end to start, and vice versa.</p> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">w</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd></dt> <dd class="svelte-18o7imq">Move cursor one window forward (down/right).</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">W</kbd></dt> <dd class="svelte-18o7imq">Move cursor one window backward (up/left).</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">w</kbd></dt> <dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd></dt> <dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">W</kbd></dt> <dd class="svelte-18o7imq">Move cursor to window number <code>count</code>.</dd> <dd class="svelte-18o7imq">If <code>count</code> &gt; number of windows, go to last window.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">h j k l</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>h j k l</kbd></kbd></dt> <dd class="svelte-18o7imq">Move cursor to window left/right/above/below current one.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">t b</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>t b</kbd></kbd></dt> <dd class="svelte-18o7imq">Move cursor to top-left/bottom-right window.</dd></div></dl></section> <section class="space-y-4"><h4 id="windows-move" class="heading-size-4">Move</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">r</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>r</kbd></kbd></dt> <dd class="svelte-18o7imq">Rotate windows downwards/rightwards.</dd> <dd class="svelte-18o7imq">The cursor remains in the same window.</dd> <dd class="svelte-18o7imq">This only works within the row or column of windows that the
                current window is in.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">R</kbd></dt> <dd class="svelte-18o7imq">Rotate windows upwards/leftwards.</dd> <dd class="svelte-18o7imq">The cursor remains in the same window.</dd> <dd class="svelte-18o7imq">This only works within the row or column of windows that the
                current window is in.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">x</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>x</kbd></kbd></dt> <dd class="svelte-18o7imq">Exchange current window with next one.</dd> <dd class="svelte-18o7imq">If there is no next window, exchange with previous window.</dd> <dd class="svelte-18o7imq">The cursor is put in the other window.</dd> <dd class="svelte-18o7imq">When vertical and horizontal window splits are mixed, the
                exchange is only done in the row or column of windows that the
                current window is in.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">H J K L</kbd></dt> <dd class="svelte-18o7imq">Move current window to far left/right/top/bottom, and use full
                height/width.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">T</kbd></dt> <dd class="svelte-18o7imq">Move the current window to a new tab page.</dd> <dd class="svelte-18o7imq">Fails if there is only one window in the current tab page.</dd></div></dl></section> <section class="space-y-4"><h4 id="windows-resize" class="heading-size-4">Resize</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">=</kbd></dt> <dd class="svelte-18o7imq">Equalize width and height of all windows.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">_</kbd></dt> <dd class="svelte-18o7imq">Maximize height of the active window.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">|</kbd></dt> <dd class="svelte-18o7imq">Maximize width of the active window.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">- +</kbd></dt> <dd class="svelte-18o7imq">Incrementally decrease/increase active window height.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">&lt; &gt;</kbd></dt> <dd class="svelte-18o7imq">Incrementally decrease/increase active window width.</dd></div></dl></section></section> <hr/> <section class="space-y-4"><h3 id="tabs" class="heading-size-3">Tabs</h3> <p>Tabs are numbered starting from 1.</p> <section class="space-y-4"><h4 id="tabs-create" class="heading-size-4">Create</h4> <dl><div><dt class="svelte-18o7imq"><code>:tabe[dit] {filename}</code></dt> <dd class="svelte-18o7imq">Open <code>filename</code> in a new tab.</dd></div></dl></section> <section class="space-y-4"><h4 id="tabs-close" class="heading-size-4">Close</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code>:tabc[lose]</code></dt> <dd class="svelte-18o7imq">Close the current tab page and all of its windows.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code>:tabo[nly]</code></dt> <dd class="svelte-18o7imq">Keep only the active tab page, closing all others.</dd></div></dl></section> <section class="space-y-4"><h4 id="tabs-focus" class="heading-size-4">Focus</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">g</kbd><kbd class="svelte-18o7imq">t</kbd></dt> <dd class="svelte-18o7imq">Switch to the next tab page.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">g</kbd><kbd class="svelte-18o7imq">T</kbd></dt> <dd class="svelte-18o7imq">Switch to the previous tab page.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code class="svelte-18o7imq">{count}</code><kbd class="svelte-18o7imq">g</kbd><kbd class="svelte-18o7imq">t</kbd></dt> <dd class="svelte-18o7imq">Switch to tab page number <code>count</code>.</dd></div></dl></section> <section class="space-y-4"><h4 id="tabs-move" class="heading-size-4">Move</h4> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code>:tabmove</code></dt> <dd class="svelte-18o7imq">Move current tab page to the end.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code>:tabmove 0</code></dt> <dd class="svelte-18o7imq">Move current tab page to the beginning.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code>:tabmove {count}</code></dt> <dd class="svelte-18o7imq">Move current tab page to position <code>count</code>.</dd></div></dl></section></section></section> <hr/> <section class="space-y-4"><h2 id="terminal-mode" class="heading-size-2">Terminal Mode</h2> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><code>:te[rminal]</code></dt> <dd class="svelte-18o7imq">Create new interactive shell.</dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>\\</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>n</kbd></kbd></dt> <dd class="svelte-18o7imq">Return to Normal Mode.</dd></div></dl></section> <hr/> <section class="space-y-4"><h2 id="lua" class="heading-size-2">Lua</h2></section> <hr/> <section class="space-y-4"><h2 id="lsps" class="heading-size-2">LSPs</h2> <dl><div><dt class="svelte-18o7imq"><kbd>K</kbd></dt> <dd class="svelte-18o7imq"><code>vim.lsp.buf.hover()</code></dd></div></dl></section> <hr/> <section class="space-y-4"><h2 id="diagnostics" class="heading-size-2">Diagnostics</h2> <dl class="svelte-18o7imq"><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">[</kbd><kbd class="svelte-18o7imq">d</kbd></dt> <dd class="svelte-18o7imq"><code>vim.diagnostic.goto_prev()</code></dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq">]</kbd><kbd class="svelte-18o7imq">d</kbd></dt> <dd class="svelte-18o7imq"><code>vim.diagnostic.goto_next()</code></dd> </div><div class="svelte-18o7imq"><dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq">d</kbd></dt> <dt class="svelte-18o7imq"><kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd> <kbd class="svelte-18o7imq"><kbd>Ctrl</kbd><span>+</span><kbd>d</kbd></kbd></dt> <dd class="svelte-18o7imq"><code>vim.diagnostic.open_float()</code></dd></div></dl></section> <hr/> <section class="space-y-4"><h2 id="notes" class="heading-size-2">Notes</h2> <p>Shortcuts are sometimes written as <code>&lt;C-A&gt;</code> to mean: hold
        <kbd>Ctrl</kbd>, press and release <kbd>a</kbd>, release
        <kbd>Ctrl</kbd>. Same for other modifiers.</p> <p>Modifiers are not combined with uppercase, only lowercase, so
        <code>&lt;C-w&gt;</code> and <code>&lt;C-W&gt;</code> both mean
        <kbd><kbd>Ctrl</kbd><span>+</span><kbd>w</kbd></kbd>.</p> <p><code>&lt;CR&gt;</code> means &quot;carriage return&quot;, i.e.
        <kbd>Enter</kbd>.</p> <p><kbd>:</kbd> to switch to command line mode, where commands can be typed,
        and tab-completion is available.</p> <div><p>A buffer is the in-memory text of a file.</p> <p>A window is a viewport on a buffer.</p> <p>A tab page is a collection of windows.</p></div></section>`;return{c(){s=p("section"),s.innerHTML=e,this.h()},l(d){s=h(d,"SECTION",{class:!0,"data-svelte-h":!0}),w(s)!=="svelte-o06b7t"&&(s.innerHTML=e),this.h()},h(){u(s,"class","space-y-4")},m(d,l){f(d,s,l)},p:a,d(d){d&&g(s)}}}function y(t){let s,e;return s=new C({props:{titleHeading:"(Neo)Vim is Cool",titleSubheading:"But also complicated.",$$slots:{default:[z]},$$scope:{ctx:t}}}),{c(){n(s.$$.fragment)},l(d){v(s.$$.fragment,d)},m(d,l){k(s,d,l),e=!0},p(d,[l]){const o={};l&1&&(o.$$scope={dirty:l,ctx:d}),s.$set(o)},i(d){e||(m(s.$$.fragment,d),e=!0)},o(d){q(s.$$.fragment,d),e=!1},d(d){r(s,d)}}}class S extends c{constructor(s){super(),b(this,s,null,y,i,{})}}export{S as component};