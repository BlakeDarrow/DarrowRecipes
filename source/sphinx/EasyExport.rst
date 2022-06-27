.. image:: https://img.shields.io/github/v/release/BlakeDarrow/EasyExport
    :target: https://github.com/BlakeDarrow/EasyExport/releases/latest
.. image:: https://img.shields.io/github/last-commit/BlakeDarrow/EasyExport
    :target: https://github.com/BlakeDarrow/EasyExport/commits/main

.. raw:: html

   <hr>  

##########
EasyExport
##########

Easy FBX Exporting for Blender with just a click. This tool allows you to not worry about settings or naming conventions, and simply hit export and forget about it. Using standard export options for both Unreal and Unity, this tools allows you to easily export your selected objects with the correct object name -- by default.

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

Promptless
----------

If the *Promptless Export* button is selected, the *Export Selection* button will utilize the user defined path and automatically export without any further user input.
Reference :ref:`Export Path`

1. **Select mesh(s)** (will be combined on export)
2. **Input desired export path** in required path field (only first time)
3. **Hit Export Selection**

.. note:: Under the hood, the button in the UI is actual changing, so if you add the *Export Selection* button to your quick favorites, it will be linked to whatever state the promptless bool is in.

.. raw:: html

   <hr>  


Prompt
------

If the *Promptless Export* boolean is **NOT** checked, the *Export Selection* button will prompt the user for a file path to export every time.

1. **Select mesh(s)** (will be combined on export)
2. **Hit Export Selection**
3. Navigate to folder destination
4. **Select Export Selection** in the pop-up

.. note:: Please do not attempt to change the export name in the file browser. Whatever name you type in will be added to the output name on export, leaving you with an incorrect .fbx file name.

.. raw:: html

   <hr>  

Use Object Origin
-------------------

| When this button is selected, at export, the object's origin will be used instead of the world origin. This is useful especially when there are multiple objects in the scene.
| When exporting multiple objects with this button applied, the active objects origin will be used.

.. raw:: html

   <hr>  


Auto Naming
-----------

* If you are using the prompted exporter, don't worry about filling out the name in Blenders exporter. This tool will automatically use the name of your selected mesh.
* If you are using the promptless method, there is no worry about accidentally effecting your export name, everything happens behind the scenes.

| **Prefix and suffix naming.**
| Looking for different naming conventions? Try using the "Prefix" and "Suffix" options. These custom options include settings like mesh export counting and custom prefix words, like "assets".


| When exporting with a suffix, you can either add a "high" or "low" tag, but not both. Additionally, if "high" or "low" is selected, you cannot choose a custom suffix. These are "either or" operations. Not both.
| 
| When utilizing the iterative suffix option, there will be an increased numerical value added to the end of the exported object name.
|
| If the ".blend" prefix is selected, the user will be prompted to save if the scene has not been saved already.

.. warning:: Currently, selecting multiple objects will export them as one mesh, using the name of the *active* collection. This is not necessarily the parent collection of the objects. Make sure to select your parent collection when using this method.

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
