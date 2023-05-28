
How to Use
##############

Navigate to the left side panel. You will find a search bar, a submission page, and a list of recipes. 

You can search for specific recipes, keywords, or tags within the search bar. You can also manually navigate to them by selecting the recipe title in the 'All Recipes' panel on the left of your screen. Alternatively, select from the list below.

.. I am using raw html to render the section titles because I am hiding the toctree labels with css so that the column elements line up cleanly.
.. raw:: html

   <hr>

   <h1>Submission</h1>


.. toctree::
   :caption: Submission

   :titlesonly:
   :maxdepth: 3

   submit

.. raw:: html

   <br>
   
   <h1>All Recipes</h1>


.. toctree::
   :caption: All Recipes
   :titlesonly:
   :maxdepth: 3
   :glob:
   
   recipes/*

.. raw:: html

   <br>
   
   <h1>Automated</h1>


.. toctree::
   :caption: Automated
   :maxdepth: 3
   :titlesonly:
   :glob:

   builds
   Download All Recipes <https://github.com/BlakeDarrow/DarrowRecipes/releases/latest/download/Recipes.zip>


.. raw:: html

   <hr>

Last built at 12:35:04 PM on 5-28-2023.
