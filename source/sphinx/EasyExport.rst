.. image:: https://img.shields.io/github/v/release/BlakeDarrow/EasyExport
    :target: https://github.com/BlakeDarrow/EasyExport/releases/latest
.. image:: https://img.shields.io/github/last-commit/BlakeDarrow/EasyExport
    :target: https://github.com/BlakeDarrow/EasyExport/commits/main

.. raw:: html

   <hr>  

##########
EasyExport
##########

| Easy FBX Exporting for Blender with just a click. This tool allows you to not worry about settings or naming conventions, and simply hit export and forget about it. Using standard export options for both Unreal and Unity, this tools allows you to easily export your selected objects with the correct object name -- by default.
| 
| Check out the recently added **"Batch Export"** options!


:ref:`usageTag` |
:ref:`ExportSettings` |
:ref:`downloadExporterTag` |
:ref:`Install` | 
:ref:`HelpTag`

.. raw:: html

   <!-- https://github.com/paulirish/lite-youtube-embed -->
   <div>
   <link rel="stylesheet" href="./_static/css/lite-yt-embed.css" />  
   <script src="./_static/lite-yt-embed.js"></script>
   <lite-youtube videoid="TDyYM4R-OYI" style="background-image: url('https://img.youtube.com/vi/TDyYM4R-OYI/maxresdefault.jpg');">
   <button type="button" class="lty-playbtn">
      <span class="lyt-visually-hidden">EasyExport</span>
   </button>
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
   
.. caution :: Sometimes you might get an error when installing saying there isn't a module named "EasyExport", restart Blender and try enabling the addon again.

.. raw:: html
    
   <hr>  


.. _usageTag:

Usage
+++++

Batch Export
-------------

If selected, upon exporting, every object selected will be exported separately. This tool also utilizes all the settings found in the *Easy Export* panel.

.. raw:: html

   <hr>  


Singular Export
----------------

If the *Batch Export* boolean is **NOT** checked, when exported, all selected mesh's will be outputted as a single, combined object.

.. note:: When exporting multiple objects as one combined output, *and* *Use Active Origin* is selected, the active object's origin will be used as the export location.

.. raw:: html

   <hr>  

Object's Export Location
-------------------------

Depending on your exporting mode you will get two separate options.

Active Origin
~~~~~~~~~~~~~~~~~~~~~~
| If "Use Active Origin" is selected, you are exporting as a singular object. If checked, at export, the *active object's origin* will be used instead of the world origin.

Individual Origins
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
| If "Use Individual Origins", you are batch exporting. If selected, you will export with each objects origin being used as the export location, instead of the world origin.


If left unselected, the output will be at world origin (0,0,0).

.. raw:: html

   <hr>  


Naming
-----------

* If you are using the prompted exporter, don't worry about filling out the name in Blenders exporter. This tool will automatically use the name of your selected mesh.
* If you are using the *"Direct Export"* method, there is no worry about accidentally effecting your export name, everything happens behind the scenes.

Singular Exporting
~~~~~~~~~~~~~~~~~~~~~~~

Depending on exporting mode you might not be able to select functionality. Batch Export locks the base naming to each objects corresponding Blender name.

| **"Smart Output Name"**
| If more than one object is selected, the active collection's name will be used as the export name. If only one object is selected, the output name will be the selected objects.

| **"Prompt Output Name"**
| The user will be prompted for the export name.

If none are selected, the object's selected name will be used as the output base name.

Batch Exporting
~~~~~~~~~~~~~~~~~~~~~~~

When batch exporting, each output will be named its corresponding object name in Blender.

.. raw:: html

   <hr>  

Prefix and Suffix
~~~~~~~~~~~~~~~~~~

| When exporting with a suffix, you can either add a "high, "low", or custom tag, but only one. Additionally, if "high" or "low" is selected, you cannot choose a custom suffix. These are "either or" operations. Not both.
| 
| When utilizing the iterative suffix option, there will be an increased numerical value added to the end of the exported object name.
|
| If the ".blend" prefix is selected, the user will be prompted to save if the scene has not been saved already.

.. raw:: html
    
   <hr>  


.. _ExportSettings:

Settings
++++++++

*To show advanced options, toggle the cogwheel in the panel menu.*

Export Path
-----------

| Found directly underneath the *Prefix* and *Suffix* panel options. Selecting the folder icon next to the string will prompt the user for a destination path. This path is shared between blender scene.
| 
| This path is absolute, not relative.

Once a path is selected, "Open Export Folder" will allow you to navigate directly to the folder in Windows Explorer. 

.. raw:: html

   <hr>  


Presets
-------

Unreal and Unity "standard" export options. The exported models imported into Unity/Unreal will have correct orientations and scale. Animations "should" also work, but additional animation settings will be available soon. If you encounter problems with exporting (animation included) please reach out and let me know. 


.. raw:: html

   <hr>  


Direct Export
-------------------

| **Found under advanced settings** 
| If the *Direct Export* button is selected, the *Export Selection* button will utilize the user defined path and automatically export without any further user input.
| Reference :ref:`Export Path`
| If the *Direct Export* button is de-selected, the *Export Selection* button will prompt the user for a destination to export.

1. **Select mesh(s)** (will be combined on export)
2. **Input desired export path** in required path field (only first time)
3. **Hit Export Selection**

.. note:: Under the hood, the button in the UI is actual changing, so if you add the *Export Selection* button to your quick favorites, it will be linked to whatever state the promptless bool is in.

.. raw:: html

   <hr>  


Force Single User
-------------------

| **Found under advanced settings** 
| When exporting, if any objects are linked, they will become single users.


.. raw:: html

   <hr>  

Separate All Actions
--------------------

| **Found under advanced settings**
| Blender's export setting for exporting all animations separately.


.. raw:: html

   <hr>  

Use Leaf Bones
--------------

| **Found under advanced settings**
| Blender's export option to utilize leaf bones when exporting.

.. raw:: html

   <hr>  


.. _helpTag:

Help
++++++++

| **No module named "EasyExport" installed**
1. Restart Blender
2. Enable "EasyExport" in preferences -> addons

| **Have any questions or comments?**
1. Email me at support@darrow.tools
