
//
$(document).ready(function() {
			$('#fullpage').fullpage({
				'verticalCentered': false,
				'scrollingSpeed': 600,
				'autoScrolling': false,
				'css3': true,
				'navigation': true,
				'navigationPosition': 'right',
			});
		});

// wow
$(function()
{
    new WOW().init();
    $(".rotate").textrotator();
})

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
          item.style.display = 'none'; // Hide all items first
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block'; // Show items based on the filter
          }
        });
      });
    });
  });

  function redirectToPortfolio(url) {
    window.location.href = url;
  }

  function showProject(projectId) {
    var projects = document.querySelectorAll('.project-details');
    projects.forEach(function(project) {
      project.style.display = 'none';
    });
    document.getElementById(projectId).style.display = 'block';
  }
