.. image:: https://img.shields.io/github/v/release/BlakeDarrow/ModelingTools
    :target: https://github.com/BlakeDarrow/ModelingTools/releases/latest
.. image:: https://img.shields.io/github/last-commit/BlakeDarrow/ModelingTools
    :target: https://github.com/BlakeDarrow/ModelingTools/commits/main

.. raw:: html

   <hr>  

#####################
ModelingTools
#####################

ModelingTools is an addon developed for Blender 2.80+ that features numerous operations to help improve the modeling pipeline. Features include; remapping frequent operations, circular arraying, mesh cleanup, and RGB masking.

:ref:`Meshtool` |
:ref:`Transform` |
:ref:`Circular` |
:ref:`Cleans` |
:ref:`Mask` |
:ref:`downloadModelingtag` |
:ref:`installModelingtag`

.. raw:: html
   
   <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
      <iframe src="https://www.youtube.com/embed/tlj1V0yBON4" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
   </div>
   <hr> 


.. _downloadModelingTag:

Download
+++++++++

`Latest Release`_ | `Source`_ 

.. _Latest Release: https://github.com/BlakeDarrow/ModelingTools/releases/latest

.. _Source: https://github.com/BlakeDarrow/ModelingTools/tree/main/ModelingTools


.. raw:: html
    
   <hr>  

.. _installModelingTag:

Installation
+++++++++++++

1. Download the latest release from github.
2. Under addon preferences in Blender, click 'install' and the select the recently downloaded zip file.
3. Enable the addon
   
.. warning:: Sometimes you might get an error when installing saying there isn't a module named "ModelingTools", restart Blender and try enabling the addon again.

.. raw:: html
    
   <hr>  

.. _fbxTag:

Usage
+++++

Functions can be found under: DarrowTools Sidepanel --> ModelingTools --> *Respective dropdown menu*

.. _Meshtool:

Mesh Tools
---------------------

Quality of life panel location for numerous Blender Internal Operations. Evergrowing collection of buttons that are useful for a quick modeling workflow. 

.. attention:: Mesh Tool operations can change depending on the viewport context.

**Origin**

Moves the selected object to the word origin, utilizing the selected objects origin point.

**Transforms**

Applies location, rotation, and scale transforms to the selected object. Internal Blender operation.

**Cleanup**  

Quick access for custom cleaning of selected objects. Removes doubles, deletes loose objects, and converts ngons to quads/tris.

.. seealso:: :ref:`Cleans`

**Normals**

Recalculates the selected mesh normals to be outside. Internal Blender operation.

**Smooth**

* Enables Smooth Shading for your selected object
* Sets auto-smooth factor to 180 Degrees

**Sharp**

* Enables Smooth Shading for your selected object
* Sets auto-smooth factor to 66 Degrees

.. raw:: html
    
   <hr>  

.. _Transform:

Orientations
-----------------------

Transform Orientations offers an easy to get to panel that expands Blender's default capability. Adds a "Clear" operation to remove excess clutter in transform dropdown menu.

**Set**

1. Select either an **edge, face or object**
2. Select the **"Set"** button
   
Assuming a valid selection, the selection will be added as the new transformation orientation. Internal Blender Operation.

**Clear**

1. Select "Clear"

This will run through every custom orientation and delete it from the available options.

.. raw:: html
    
   <hr>  

.. _Circular:

Circular Array
---------------------

Circular Array will array the selected mesh around the cursor's current location. So how ever far away the selected mesh is, that is the radius of the circle used to array. This tool is non-destructive so the values can be changed on the fly.

1. **Select** your object
2. Set the desired **amount** of array elements in the sidebar panel
3. Select an **axis** to array along (only one axis can be selected)
4. Hit **"Array Selected"**
   
To change the array amount, simply reselect the object, change the amount in the panel, and hit "Array Selected" again! This will also recalculate the positions of the arrayed object.

.. warning:: When duplicating a mesh that has a "DarrowToolkitArray" modifier on it, the data will not always update accordingly. To fix this, either create a new mesh, or apply the modifier before duplicating.

.. raw:: html
    
   <hr>  

.. _Cleans:

Cleanup Mesh
---------------------

The cleanup mesh tool will run through a few of Blender's standard clean-up menu operations with the hope of streamlining this process. 

1. Set your desired **merge distance** for vertices. Higher numbers will deform the object.
2. Decide on whether or not you want **ngons** to be attempted to be converted into quads. This doesnt always produce good results, so undo might be your friend here.
3. Select **"Cleanup"**

.. raw:: html
    
   <hr>  


.. _Mask:

RGB Masking
---------------------

The RGB Mask tool is an easy to use and simple way to create RGB masks from selection. Simply:

1. Toggle vertex color visibility by clicking the **"Display Color"** in the sidebar panel.
2. **Select** any object(s), vertex, or face
3. Select the **color** to use on those faces
