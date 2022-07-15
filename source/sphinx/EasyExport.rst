.. image:: https://img.shields.io/github/v/release/BlakeDarrow/EasyExport
    :target: https://github.com/BlakeDarrow/EasyExport/releases/latest
.. image:: https://img.shields.io/github/last-commit/BlakeDarrow/EasyExport
    :target: https://github.com/BlakeDarrow/EasyExport/commits/main

.. raw:: html

   <hr>  

##########
EasyExport
##########

| Easy FBX Exporting for Blender with just a click. This tool allows you to not worry about settings or naming conventions, and simply hit export and forget about it. Using standard blender export presets, this tools allows you to easily export your selected objects.
| 
| Check out the recently added **"Batch Export"** options!

:ref:`downloadExporterTag` |
:ref:`Install` | 
:ref:`pathSettings` |
:ref:`presetsSettings` |
:ref:`namingSettings` |
:ref:`HelpTag`

.. raw:: html

   <!-- https://github.com/paulirish/lite-youtube-embed -->
   <div>
   <link rel="stylesheet" href="./_static/css/lite-yt-embed.css" />  
   <script src="./_static/lite-yt-embed.js"></script>
   <lite-youtube videoid="zLwUxIT3xiw" style="background-image: url('https://img.youtube.com/vi/zLwUxIT3xiw/maxresdefault.jpg');">
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


.. _ModeRef:

Mode
+++++

| 1. **Batch Exporting**
| If *"Batch Export"* is selected, upon exporting, every object selected will be exported separately and output with their corresponding mesh name.
| Reference :ref:`pathSettings`.
|
| 2. **Combined Export**
| If the *"Batch Export"* boolean is **NOT** checked, when exported, all selected mesh's will be output as a single combined object. That singular output file will be named whichever preference the user selects.
| Reference :ref:`namingSettings` and :ref:`pathSettings`.

.. raw:: html

   <hr>  

Object Location
++++++++++++++++

Depending on your exporting mode you will get two separate options.

| 1. **Active Origin**
| If you see *"Use Active Origin"*, you are exporting as a singular object. If selected, at export, the *active object's origin* will be used instead of the world origin.
| 
| 2. **Individual Origins**
| If you see *"Use Individual Origins"*, you are batch exporting. If selected, you will export with each objects origin being used as the export location, instead of the world origin.

If left unselected, the output will be at world origin (0,0,0).

.. raw:: html

   <hr>  

.. _pathSettings:

Path
+++++

| Selecting the folder icon next to the string will prompt the user for a destination path. If *"Direct Export"* is enabled, when exporting, the object(s) will be directly exported to this path.
| (This path is absolute, not relative)

Once a path is selected, *"Open Export Folder"* will allow you to navigate directly to the folder in Windows Explorer. 

.. raw:: html

   <hr>  

.. _presetsSettings:

Presets
++++++++

| These are the users saved Export Operator presets. These are built inside Blender's export menu. This allows the user to use a vast amount of different workflows with my tool.

.. note:: The *"default"* preset is built by me with an emphasis for exporting to Unreal Engine. 

.. raw:: html

   <hr>  

.. _namingSettings:

Naming
+++++++

Base Name
---------------

| When batch exporting, each objects base name will be its corresponding mesh name. Reference :ref:`ModeRef`.

.. note:: Depending on exporting mode you might not be able to select functionality. Batch Export locks the base naming to each objects corresponding Blender name.

| These three options only apply to the singular export mode.

| 1. **Active Collection**
| The active collection's name will be used as the export name.

| 2. **Active Object**
| If selected, the active object will be used as the output base name.

| 3. **Prompt Output Name**
| The user will be prompted for the base export name.
|
| If you are not using the *"Direct Export"* method, don't fill out the name in Blender's exporter.

Prefix and Suffix
-----------------

| When exporting with a suffix, you can either add a "high, "low", or custom tag, but only one. Additionally, if "high" or "low" is selected, you cannot choose a custom suffix. These are "either or" operations. Not both.
| 
| When utilizing the iterative suffix option, there will be an increased numerical value added to the end of the exported object name.
|
| If the ".blend" prefix is selected, the user will be prompted to save if the scene has not been saved already.

.. raw:: html
    
   <hr>  


Advanced
++++++++++

*To show advanced options, toggle the cogwheel in the panel header.*

.. _direct:

Direct Export
-------------------

| If selected, upon exporting there is nothing else needed by the user. The exporter will use the defined path and automatically export without any further input.
| 
| If **not** selected, upon exporting their will be a prompt for the user to select a destination to export everytime.

Force Single User
-------------------

| When exporting, if any objects are linked, they will become single users.

Open Folder On Export
----------------------

| After exported, the destination folder will be opened.

Open Docs
----------------------

| Opens **darrow.tools/EasyExport** in the default web browser.

Open Presets
----------------------

| This opens the path to Blender's user preset files. These python files are editable, and offers a different method to edit export presets.

Edit Defaults
----------------------

| This opens my custom default preset in your default text-editor.

.. raw:: html

   <hr>  


.. _helpTag:

Help
++++++++

1. Restart Blender
2. Enable "EasyExport" in preferences -> addons

| **Have any questions or comments?**
| Email me at support@darrow.tools