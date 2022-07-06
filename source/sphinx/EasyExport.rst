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


:ref:`fbxTag` |
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
   
.. warning:: Sometimes you might get an error when installing saying there isn't a module named "EasyExport", restart Blender and try enabling the addon again.

.. raw:: html
    
   <hr>  


.. _fbxTag:

Usage
+++++

Batch Export
-------------

If the *Batch Export* button is selected, upon exporting, every object selected will be exported separately. This tool utilizes all the settings found in the *Easy Export* panel, thus giving the user many workflow options.

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

Active Origin
~~~~~~~~~~~~~~~~~~~~~~
| If you have a button that reads "Use Active Origin", you are exporting as one object. If selected, at export, the *active object's* (generally the last object selected) *origin* will be used instead of the world origin.

Individual Origins
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
| If that buttons label is "Use Individual Origins", you are batch exporting. If selected, you will export with each objects origin being used as the export location, instead of the world origin.

.. raw:: html

   <hr>  


Auto Naming
-----------

* If you are using the prompted exporter, don't worry about filling out the name in Blenders exporter. This tool will automatically use the name of your selected mesh.
* If you are using the *"Direct Export"* method, there is no worry about accidentally effecting your export name, everything happens behind the scenes.

| **Prefix and suffix naming.**
| Looking for different naming conventions? Try using the "Prefix" and "Suffix" options. These custom options include settings like mesh export counting and custom prefix words, like "assets".


| When exporting with a suffix, you can either add a "high" or "low" tag, but not both. Additionally, if "high" or "low" is selected, you cannot choose a custom suffix. These are "either or" operations. Not both.
| 
| When utilizing the iterative suffix option, there will be an increased numerical value added to the end of the exported object name.
|
| If the ".blend" prefix is selected, the user will be prompted to save if the scene has not been saved already.

.. warning:: When exporting combined, and *"Smart Naming" is on, the outputted file name will use the name of the *active* collection. This is not necessarily the parent collection of the objects. Make sure to select your parent collection when using this method.

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

Smart Naming
-------------------

| **Found under advanced settings** 
| When exporting multiple objects as one mesh, the final name will be the active collections name plus any prefix and suffix customizations. Make sure to set the correct collection as active when this bool is enabled. 
| When exporting a singular object, the final name will be the selected objects name plus any prefix and suffix customizations.


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
