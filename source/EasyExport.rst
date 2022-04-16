.. image:: https://img.shields.io/github/v/release/BlakeDarrow/EasyExport?color=2980b9
    :target: https://github.com/BlakeDarrow/EasyExport/releases/latest
.. image:: https://img.shields.io/github/workflow/status/BlakeDarrow/DarrowTools/build-sphinx-to-gh-pages?label=docs
    :target: https://github.com/BlakeDarrow/DarrowTools/actions/workflows/pages/pages-build-deployment
.. image:: https://img.shields.io/github/last-commit/BlakeDarrow/EasyExport
    :target: https://github.com/BlakeDarrow/EasyExport/commits/main
.. image:: https://img.shields.io/github/downloads/BlakeDarrow/EasyExport/total?color=9b9b9b

.. raw:: html

   <hr>  

##########
EasyExport
##########

Easy FBX Exporting for Blender with just a click. This tool allows you to not worry about settings or naming conventions, and simply hit export and forget about it. Using standard export options for both Unreal and Unity, this tools allows you to easily export your selected objects with the correct object name -- by default.

:ref:`fbxTag` |
:ref:`ExportSettings` |
:ref:`libraryTag` |
:ref:`downloadExporterTag` |
:ref:`Install`

.. raw:: html
   
   <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto;">
      <iframe src="https://www.youtube-nocookie.com/embed/TDyYM4R-OYI" frameborder="0" allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe>
   </div>
   <hr> 


.. _downloadExporterTag:

Download
+++++++++

`Latest Release`_ | `Source`_ 

.. _Latest Release: https://github.com/BlakeDarrow/EasyExport/releases/latest

.. _Source: https://github.com/BlakeDarrow/EasyExport/tree/main/EasyExport


.. raw:: html
    
   <hr>  


.. _Install:

Installation
+++++++++++++
1. Download the latest release from github.
2. Under addon preferences in Blender, click 'install' and the select the recently downloaded zip file.
3. Enable the addon
   
.. warning:: Sometimes you might get an error when installing saying there isn't a module named "EasyExport", restart Blender and try enabling the addon again.

.. raw:: html
    
   <hr>  


.. _fbxTag:

Usage
+++++

Promptless
----------

If the *Promptless Export* boolean is checked, the *Export Selection* button will utilize the user defined path and automatically export without any further user input.
Reference :ref:`Export Path`

1. **Select mesh(s)** (will be combined on export)
2. **Input desired export path** in required path field (only first time)
3. **Hit *Export Selection***

.. note:: Under the hood, the button in the UI is actual changing, so if you add the *Export Selection* button to your quick favorites, it will be linked to whatever state the promptless bool is in.

Prompt
------

If the *Promptless Export* boolean is **NOT** checked, the *Export Selection* button will prompt the user for a file path to export every time.

1. **Select mesh(s)** (will be combined on export)
2. **Hit *Export Selection***
3. Navigate to folder destination
4. **Select *Export Selection*** in the pop-up

.. note:: Please do not attempt to change the export name in the file browser. Whatever name you type in will be added to the output name on export, leaving you with an incorrect .fbx file name.

Auto Naming
-----------

* If you are using the prompted exporter, don't worry about filling out the name in Blenders exporter. This tool will automatically use the name of your selected mesh.
* If you are using the promptless method, there is no worry about accidentally effecting your export name, everything happens behind the scenes.

| **Prefix and suffix naming.**
| Looking for different naming conventions? Try using the "Prefix" and "Suffix" options. These custom options include settings like mesh export counting and custom prefix words, like "assets".

.. warning:: Currently, selecting multiple objects will export them as one mesh, using the name of the *active* collection. This is not necessarily the parent collection of the objects. Make sure to select your parent collection when using this method.

.. raw:: html
    
   <hr>  


.. _ExportSettings:


Settings
++++++++

*To show advanced options, toggle the cogwheel in the panel menu.*

Export Path
-----------

Found underneath the *Prefix* and *Suffix* options, selecting the folder icon next to the string will prompt the user for a destination path. This path is shared between blender scene.

Presets
-------

Unreal and Unity "standard" export options. The exported models imported into Unity/Unreal will have correct orientations and scale. Animations "should" also work, but additional animation settings will be available soon. If you encounter problems with exporting (animation included) please reach out and let me know. 

Multi-Object Naming
-------------------

| **-Found under advanced settings-** 
| When exporting multiple objects as one mesh, the final name will be the active collections name. Make sure to set the correct collection as active when this bool is enabled.

Separate All Actions
--------------------

| **-Found under advanced settings-**
| Blender's export setting for exporting all animations separately.

Use Leaf Bones
--------------

| **-Found under advanced settings-**
| Add a leaf bone to the end of the chain on export.

.. raw:: html
    
   <hr>  

.. _libraryTag:

Mesh Library
++++++++++++++++++++++

Managing your objects has never been easier. With a click of the button, your mesh is stored in a local folder, for easy importing.

Adding objects
--------------------

1. Select "Add"

2. Hit "Add to Library"

Retrieving objects
-----------------------

Don't worry, getting the mesh back into a blend scene is just as easy!

1. Select "Get"

2. Navigate the drop down panel titled "Get from library"

3. Select your desired mesh!

.. note:: To navigate to the thumbnail and object folders, hit the cogwheel in the panel, and select the corresponding button.
