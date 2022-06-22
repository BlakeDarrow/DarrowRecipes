.. image:: https://img.shields.io/github/v/release/BlakeDarrow/SceneOrganizer
    :target: https://github.com/BlakeDarrow/SceneOrganizer/releases/latest
.. image:: https://img.shields.io/github/last-commit/BlakeDarrow/SceneOrganizer
    :target: https://github.com/BlakeDarrow/SceneOrganizer/commits/main

.. raw:: html

   <hr>  

#####################
SceneOrganizer
#####################

SceneOrganizer is simple tool that allows the user to manage some display options such as hide/un-hide boolean cutters and empties, sort objects into new collections by type, and outliner collection sorting.

:ref:`Sorting` |
:ref:`Viewport` |
:ref:`Outliner` |
:ref:`downloadSceneTag` | 
:ref:`installScenetag` 

.. raw:: html
   
   <!-- https://github.com/paulirish/lite-youtube-embed -->
   <div>
   <link rel="stylesheet" href="./_static/css/lite-yt-embed.css" />  
   <script src="./_static/lite-yt-embed.js"></script>
   <lite-youtube videoid="EOLpj38DQwU" style="background-image: url('https://img.youtube.com/vi/EOLpj38DQwU/maxresdefault.jpg');">
   <button type="button" class="lty-playbtn">
   <span class="lyt-visually-hidden">SceneOrganizer</span>
   </button>
   </div>
   <hr> 

.. _downloadSceneTag:

Download
+++++++++

`Latest Release`_ | `Source`_ 

.. _Latest Release: https://github.com/BlakeDarrow/SceneOrganizer/releases/latest

.. _Source: https://github.com/BlakeDarrow/SceneOrganizer/tree/main/SceneOrganizer

.. raw:: html
    
   <hr>  


.. _installSceneTag:

Installation
+++++++++++++
1. Download the latest release from github.
2. Under addon preferences in Blender, click 'install' and the select the recently downloaded zip file.
3. Enable the addon
   
.. warning:: Sometimes you might get an error when installing saying there isn't a module named "SceneOrganizer", restart Blender and try enabling the addon again.

.. raw:: html
    
   <hr>  


.. _fbxTag:

Usage
+++++

.. _Sorting:

Object Sorting by Type
-----------------------

**Booleans** // **Empties**

Selecting either button option will grab all objects by selected type, and move them into a new collection for ease of access and outliner sorting.

The new collection name will either be "Darrow_Booleans" or "Darrow_Empties"

.. note:: This tools will work recursively! New collections will not be created, objects will be added to the existing collection after first run.

.. note:: Additional type sorting will be added soon! If you have any suggestions please contact me at, support@darrow.tools.

.. raw:: html

   <hr>  

.. _Viewport:

Viewport Display Options
-------------------------

**Empties** // **Booleans**   

Selecting either "booleans" or "empties" will change the desired visibility of those objects by type within the viewport. 
"Empties" will work with anything created under the object type of empty. And "Booleans" will work with any object set to to display visibility of "BOUNDS"
   
**Random** // **Material**    

Random or material will either show a random color by mesh, or the mesh's material. Either/or operation, both cannot be true.
   
**Wireframe**

Wireframe operation will hide all viewport overlays, and only show the mesh's' with their respective wireframes.

.. note:: All viewport display options are toggleable. Selecting a button will either hide or un-hide by desired type.

.. raw:: html

   <hr>  

.. _Outliner:

Outliner Options
---------------------

**Collapse**

Collapses all collections within the outliner. Button also available inside outliner context header

**Sort**

Sort all objects and collections alphabetically. Button also available inside outliner context header

**"_Low" or "_High"**

Adds respective suffix to all of the selection, and strips additional excess characters, and converts "." to "_"

**Strip**

Removes excess numbers and suffix's as well as converting "." to "_"

**Icons Only**

Shows only the icons for custom buttons in header