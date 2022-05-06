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
   
   <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
      <iframe src="https://www.youtube-nocookie.com/embed/EOLpj38DQwU" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
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

Scene Object Sorting
---------------------

**Booleans and/or Empties**

* Selecting either button option will grab all objects by selected type, and move them into a new collection for ease of access and outliner sorting.

.. _Viewport:

Viewport Display Options
-------------------------

.. note:: All viewport display options are toggleable. Selecting a button will either hide or un-hide by desired type.


**Empties and/or Booleans**

Selecting either booleans or empties will change the desired visibility of those objects by type.
   
**Random and/or Material**
   
Random or material will either show a random color by mesh, or the mesh's material. Either/or operation, both cannot be true.
   
**Wireframe**

Wireframe operation will hide all viewport overlays, and only show the mesh's' with their respective wireframes.


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