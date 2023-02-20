
# -- Project information -----------------------------------------------------

project = 'DarrowRecipes'
copyright = '2022, Blake Darrow'
author = 'Blake Darrow'
release = '2023'

# -- General configuration ---------------------------------------------------

extensions = ["sphinx_rtd_dark_mode",
    'sphinx.ext.githubpages',
    'sphinx.ext.autosectionlabel',

]

html_theme_options = {
    'style_external_links': False,
    'navigation_depth': -1,
    'sticky_navigation' : True,

    }

copyright = '2023, Blake Darrow'

templates_path = ['_templates']

html_show_sphinx = False

html_show_sourcelink = False

language = None

exclude_patterns = []

html_theme = 'rtd'

html_static_path = ['_static']