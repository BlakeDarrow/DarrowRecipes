##############
This To That
##############

**This To That** Blender baking tools drastically improves the baking process between Blender, Marmoset, and Substance Painter.

This tool includes time-saving-features such as bakegroups, auto match high/low names, one-click high/low exporting, open in marmoset, open in painter, and more!

Keep reading to learn about the available tools and their explanations!

.. raw:: html

   <!-- https://github.com/paulirish/lite-youtube-embed -->
   <div>
   <link rel="stylesheet" href="./_static/css/lite-yt-embed.css" />  
   <script src="./_static/lite-yt-embed.js"></script>
   <lite-youtube videoid="gbh6HjmqH60" style="background-image: url('https://i3.ytimg.com/vi/gbh6HjmqH60/hqdefault.jpg');">
   <button type="button" class="lty-playbtn">
      <span class="lyt-visually-hidden">EasyExport</span>
   </button>
   </div>
   <hr> 

.. _dInstall:

1. Installation
---------------

-  **Download**

   Purchase the addon and then download the latest release from **BlenderDepot**. You can also see all available source files after purchasing this Addon.

-  **Install**

   Under Blender's Preference's window, find the **Add-ons** tab, click **install** and then select the recently downloaded zip file.

-  **Enable**

   Search for **This to That** inside the **Add-ons** tab and enable the checkbox by its name. After enabling the addon, restart Blender.

-  **Update Addon**

   Before updating, it is suggested to save your user preferences. See :ref:`duserprefs` 

.. raw:: html
    
   <hr>

.. _dAddonPrefs:

2. Addon Preferences
--------------------

To navigate to these settings, first go to Blender's Preference's window and then find the **Add-ons** tab.
Search for **This to That** and select the dropdown icon by its name. You will see the catagories below in an expandable menu format.


.. _dGenSet:

2.1 General Settings
+++++++++++++++++++++

.. _dDefaultPaths:

2.1.1. Default Paths
**************************

-  **Marmoset Executable**

   Path to local Marmoset executable. Both Marmoset 3 and 4 are supported. 

   .. Note:: The majority of testing was done on Marmoset 3, please send Marmoset 4 bugs to contact@darrow.tools

-  **Painter Executable**

   Path to local Substance Painter executable. Both Steam edition and the standard edition are supported. 
  
   If you are using the steam edition, please see :ref:`dimportantinfo`

   .. warning:: For full feature support please use Substance Painter 2022 or older. If 2022+ is not used, mesh map refreshing/setting might not function correctly.

-  **Default Project**


   This is the Addon's default project path. All generated folders and save files will be output to this destination.
   
   See :ref:`doutdest` to customize folder and file generation.

   .. note::
      When creating new assets this is the order for the initial project path. Each property will inherit its parent value.

      - Asset Project Path

         -  (:ref:`dfiltermenu`)
      
      - Scene Project Path 
   
         -  (:ref:`dscenesettings`) 
      
      - Default Project Path

         - (:ref:`ddefaultpaths`) 

      For example: When creating a new asset, the "Scene Project" is checked. If empty, then the "Default Project" is used.
      Lastly, if "Default Project" is empty, the .blend file location is used.

.. _dObjNames:

2.1.2. Object Names
********************

-  **'High' Suffix**

   Desired suffix to identify high poly objects and collections.

-  **'Low' Suffix**

   Desired suffix to identify low poly objects and collections.

-  **Successful Match Prefix**

   The prefix to be added to successfully matched object names. This string can be blank.

-  **Pre-named Prefix**

   The prefix to be added to successfully matched object names if one of the two pre-named settings is enabled. This string shouldn't be blank, with **bake** as default.

.. _dOutDest:

2.2. Output Destinations
+++++++++++++++++++++++++

Each Output type has the follow available options.

-  **Parent Folder**

   The destination folder where this output type will be generated. This folder can be another output location, project destination, or a custom destination.

   .. warning:: It is possible to get caught in a parent folder loop. 
  
-  **Sub-folder / Save File**
  
   Boolean option to either create a sub-folder as a child of the parent, or save the file depending on the output type. 

-  **Sub-folder name**
  
   If create sub-folder / save file is TRUE, the new sub folder name.

.. _dOutFolder:

2.2.1. Output Folders
*********************

-  **FBX**

   The destination folder for the high and low poly fbx models.
  
-  **Textures**

   The texture export location for Substance Painter

-  **Bake Textures**

   The bake texture export location from Marmoset Toolbag

.. _dOutFile:

2.2.2. Save Files
******************

-  **.tbscene**

   The save file for Marmoset Toolbag

-  **.spp**

   The save file for Substance Painter

.. _dPrefFile:

2.3 Preference Files
+++++++++++++++++++++

Here you can find all the information about saving and loading user preferences, presets, and the texture map file.

.. _dUserPrefs:

2.3.1. User Preferences
***********************

-  **User Prefs File**

   Points to the user preferences json file location. Opens a file browser to select json file.
  
-  **Export User Prefs**
 
   Export current preferences to json file. This allows you to distribute the json file to other Blender versions, co-workers, or to simply backup your preferences.

-  **Load User Prefs**
 
   Import user preferences from json file.

-  **Edit User Prefs**
 
   Open user preferences json file in default text editor.

.. _dAssetPreset:

2.3.2. Asset Presets
********************

-  **Bake Asset Preset Folder**
  
   Folder location to create and load asset presets from. Defaults to Blender config in app data.

.. _dFBXExport:

2.3.3. FBX Exporting
********************

-  **Export Preset**

   Edit the default FBX export preset in the default text editor. This preset system is Blender's FBX preset system.

.. _dTexList:

2.3.4. Texture List
*******************

-  **Texture Map File**

   Points to the texture map file where all texture map information can be found. Defaults to Blender config in app data.
 
-  **Edit Texture Maps**

   Edit the texture map file in the default text editor.

.. _dImportantInfo:

2.4. Important Information
+++++++++++++++++++++++++++


.. _dSubPainterInfo:

2.4.1. Substance Painter
************************

-  **Steam edition**

   Shows a pop-up of important steam edition information.

-  **Launch Options to Add**

   String of commands to add to Steam client Substance Painter launch commands.

-  **Launch Options Added**

   Boolean if launch options have been added by the user inside Steam.

.. raw:: html
    
   <hr>

.. _dSceneSettings:

3. Scene Settings
-----------------

.. _dScenePro:

3.1. Scene Project
++++++++++++++++++

-  **Scene Project**

   Scene's default project path. All newly created assets will inherit this file path.

.. _dAutoMatchSettings:

3.2. Auto Match
+++++++++++++++

-  **Apply Modifiers**

   Upon running the "Auto Match" operation, all objects associated with the asset will have their modifiers applied, parents, cleared, and transformations applied.
   This is useful if there is a lot of geometry being applied through your modifier stack and you want to insure the most successful auto match operation.

-  **Match Origins**

   When matching names, should objects have matching origin points for the match to be successful.
   There is a very small tolerance percentage behind the scenes to allow for some minor differences. 

   .. note:: If enabled and multiple objects are still unmatched, turn this setting and **iterate match searching** off, and re-run the matcher to catch more objects.

-  **Max Origin Distance**

   The maximum distance between any two objects origin point to be considered a "match". (What units are we using here?)

-  **Iterate Matching**

   Should the matcher run until the **padding step size** hits 75. This will aid in catching objects to be matched. 

   .. warning:: Larger poly counts will increase wait times drastically.

-  **Iterate Step Size**

   The amount of padding to increase on every match run. Lower values will give higher match accuracy. Higher values will give lower match accuracy. Default is 1.

-  **Search Padding**

   Manual padding size to match names with, if **iterate matching** is off. Lower values offer higher chances of successful matches. 
   This is a dimensional padding percentage per axis. Essentially meaning tolerance. If you have few objects to match and low amounts of overlap, this number can be confidently larger.
   However, if you have lots of objects that overlap, it is recommend to start at zero and slowly increase.
   If this is the case, it is better to enable iterate match searching and avoid manual use.

.. _dExport:

3.3. Export
+++++++++++

-  **Triangulate**

   On export add a Triangulate modifier to each object, if one is not already present in the modifier stack.

.. _dColl:

3.4. Collections
++++++++++++++++

-  **Delete with bake asset**

   On removal of an asset from the bake list, delete the associated collections and move all children objects to the master scene collection.

.. _dUI:

3.5. UI
++++++++++++++++

-  **Advanced**

   Toggle the UI to show advanced operations.

-  **Show Copying Tools**

   Toggle the UI to show manual copy operations.

-  **Copy Collections**
   If enabled, the functionality of the **Mark** buttons will be changed allowing for the ability to select and mark collections instead of objects. This is enabled by default. 
   If disabled, the functionality of the **Mark** buttons will be a standard object selection.

   | The **Mark** buttons icon will visually indicate this setting. If enabled, a collection icon will appear. If disabled, a object icon will appear.

.. raw:: html
    
   <hr>

.. _dBakeList:

4. Bake Asset List
------------------

This is where you can find the bake assets associated with your Blender scene. This is a list of collections that stores data associated with the new bake group.
We can change information on a per asset level, allowing you to switch the working bake group easily and retain the relevant information.   

.. _dListOps:

4.1. List Operations
++++++++++++++++++++

.. _dAdd:

4.1.1. Add
**********

Add asset is located on the bake assets panel, visually indicated by a plus symbol. Upon selection, a new pop-up menu will appear with the following information.

-  **Name**
  
   -  **Create New**

      Create new names for every object. The new object name is built from an optional prefix, asset name, object number, and suffix

   -  **Highs Pre-named**

      The low objects will inherit the corresponding name upon object matching.

   -  **Lows Pre-named**

      The high objects will inherit the corresponding name upon object matching.


-  **Create From**

-  **Mesh Names**

-  **Preset**

.. _dRemove:

4.1.2. Remove
*************

Remove asset is located on the bake assets panel, visually indicated by a minus symbol.
With a bake asset selected this will remove all associated information including the linked bake group objects. This will not delete the original objects.

.. _dPerAssetOp:

4.2. Per Asset Operations
+++++++++++++++++++++++++

.. _dResetOp:

4.2.1. Reset
************

Found directly under the bake asset list item, this will delete all objects and collections that are children of the bake_group collection and re-build the bakegroup.

.. _dOriginal:

4.2.2. Original
***************

Found directly under the bake asset list item, this will toggle the visibility of the non-modified original collection.

.. _dLinked:

4.2.3. Linked
*************

Found directly under the bake asset list item, this will toggle the visibility of the generated bake_group collection.

.. _dFilterMenu:

4.3. Filter Menu
++++++++++++++++

-  **Preset**

   Preset file to autofil asset and scene settings with.

-  **Project**

   Output destination for generated file structure and exports. See :ref:`doutdest` to customize these new folders and save files.

.. _dGenSettings:

4.3.1. General Settings
************************

-  **Maps**

   Maps to enable inside Marmoset. This will also be sent to Substance Painter. If the map has correct Painter usage set up, it will be loaded into that mesh map slot.

.. _dMarmoToolbag:

4.3.2. Marmoset Toolbag
************************

-  **Auto Bake**

   Optional property to automatically bake using the settings defined in this panel whenever Marmoset is opened.
   This property is recommend to be off if baking complex objects that need fine tuning inside Marmoset.

-  **Texture Size**

   Size of the exported textures when baking.

-  **Bake Samples**

   Target amount of samples to bake at.

   .. Note:: 64x samples is not supported through Marmoset API. If you would like this amount of samples, manually select this property inside Marmoset.

-  **Output Format**

   Target bits per channel to export.

-  **Minimum Cage Offset**

   Default minimum cage offset.

-  **Maximum Cage Offset**

   Default maximum cage offset.

-  **Flip Normals**

   Whether or not the Y channel of the normal map should be flipped.

-  **Texture Sets**

   Should Marmoset bake on different texture sets.

   .. Note:: If this option is enabled, auto bake is enabled, and you are using Marmoset 3, auto bake will not properly run.

-  **Ambient Occlusion Distance**

   Maximum search distance for ambient occlusion.

.. _dSubPainter:

4.3.3. Substance Painter
************************

-  **Texture Size**

   Document resolution for Substance Painter.

-  **Format**

   Project Normal Map format.

-  **Existing Scene**

   If you have an existing project **outside** of this tools created save files, specify it here. :ref:`dopenpaintadv` will recognize this as the new save file. 

-  **Template**

   Substance Painter .spt file to create new projects from.

.. raw:: html
   
   <hr>

.. _dOps:

5. Operations
-------------

.. _dSimpleOp:

5.1. Simple Mode
++++++++++++++++

Simple mode is not recommended for overly complex objects as the wait time can be high and Blender can become unresponsive for lengthy periods of time.
It is recommended to manually run through the steps using advanced mode if your objects need extra love. 

Simple mode wraps the functions of :ref:`dadvancedmode` into two easy steps.

.. _dOpenMarmo:

5.1.1. Open in Marmoset
************************

This will exceute the following:

-  :ref:`dautomatch`

-  :ref:`dExportHighLow`

-  :ref:`dopenmarmoadv`

.. _dOpenPaint:

5.1.2. Open in Painter
************************

See :ref:`dopenpaintadv`.

.. raw:: html
    
   <hr>

.. _dAdvancedMode:

5.2. Advanced Mode
++++++++++++++++++

Advanced mode allows for complete control of the high to low baking process and this tool's unique features.
Throughout this process you are always welcome to make changes to the duplicated objects, rename them, and move them to the proper matched collection.

.. _dAutoMatch:

5.2.1. Setup and Auto Match
****************************

All high and low poly objects associated with this asset will try to be matched together using their origin points, distance from each other, dimensional box, and ray-casting.

.. note:: These settings can be edited under :ref:`dscenesettings`

If any two objects are matched, they will be renamed and moved to a new "MATCHED" collection nested inside the bake group collection.
The new names are built from your name settings when you created a new asset.

.. _dMatchSel:

5.2.2. Match Selected
*********************

With so much behind the scenes happening here, its best to learn from trial and error how this works.
However, generally speaking, you shouldn't have any confusion with this tool, as it "works" for whatever your selection is.

With any object selected, **Match Selected** becomes available. There are numerous operations happening behind the scenes depending on your selection.

.. note:: These operations will only happen if the selected objects are children of the bake group collection.
   Additionally, this action is reversible, so no need to worry if you match wrong objects. 

-  If **ONE** low poly object is selected, it is considered a new match.
  
-  If **ONE** low poly object and **ONE** high poly object are selected, it is considered a new match.

-  If **ONE** low poly object and **ANY** high poly objects are selected, all high poly objects are matched with the low poly object.

-  If **NO** low poly objects, **ONE** matched high poly, and **ANY** unmatched high poly objects are selected, the unmatched highs will be matched with the matched high.

   -  This matches floaters.

-  If **ONE** low poly object, **NO** matched high poly, and **ANY** unmatched high poly objects are selected, the unmatched highs will be matched with the matched low.

   -  This also matches floaters.

-  If **NO** low poly objects, **ANY** matched high poly, and **ANY** unmatched high poly objects are selected, the unmatched highs will be matched with the **ACTIVE** matched high.

This list is **not** dependant on selection order. 

.. warning:: If a selection is invalid, nothing will happen.

.. _dExportHighLow:

5.2.3. Export High/Low
**********************

This will export all objects in both the low matched and high matched collections. All respective objects will be combined at export meaning there will be two FBXs created. 
This will utilize an FBX export preset which can be found and edited under :ref:`duserprefs`.

The FBXs will be located in the user defined export scheme found under :ref:`doutdest`.

.. _dOpenMarmoAdv:

5.2.4. Open Asset In Marmoset
*****************************

Using the selected bake asset's :ref:`dmarmotoolbag` settings and exported FBXs, this will open the Marmoset executable defined in :ref:`ddefaultpaths`.

If you have save files enabled, upon re-running this tool, this will search for the existing save file and open it.

.. note:: This will **always** open a new instance of Marmoset Toolbag. 

.. _dOpenPaintAdv:

5.2.5. Open Asset In Painter
*****************************

Using the selected bake asset's :ref:`dSubPainter` settings, this will open the Painter executable defined in :ref:`ddefaultpaths` with launch arguments.
If you are using Steam, please see :ref:`dimportantinfo` inside addon preferences.

If Substance Painter is already open, this tool will attempt to save the existing open project first.
If you have save files enabled this will search for an existing save file and if found, open it. If there is not a save file found, a new project will be created.

If you have a template defined in your asset settings, the newly created Painter project will utilize that.
Additionally, if you have an existing scene declared inside your asset settings, this function will utilize that desired project instead of searching for the save file.

.. note:: Only **one** instance of Substance Painter will ever be open when using this tool.
