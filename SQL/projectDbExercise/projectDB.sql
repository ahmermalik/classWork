---- 1.	What are all projects that use JavaScript?
--
--SELECT * FROM project
--JOIN project_uses_tech ON project_uses_tech.project_id = project.id
--JOIN tech ON project_uses_tech.tech_id = '3';

-- 2. 	What are all technologies used by the Personal Website?

SELECT * FROM tech
JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
JOIN project ON project_uses_tech.project_id = project.id
WHERE project.name = 'Personal Website';

---- 3. 	Perform a left outer join from the tech table to the project_uses_tech table - which techs have no associated project?
--
--SELECT * FROM (SELECT tech.name, project.name AS pname FROM tech
--LEFT OUTER JOIN project_uses_tech ON project_uses_tech.tech_id = tech.id
--LEFT OUTER JOIN project ON project_uses_tech.tech_id  = project.id) AS tech_projects WHERE tech_projects.pname IS NULL;
--			-- The techs that have no  projects associated with it is Ruby, JavaScript, and Java.
--
---- 4.	Based on the previous query, get the count of the number of techs used by each project.
SELECT project.name AS pname, tech.name FROM project
  JOIN project_uses_tech ON project_uses_tech.project_id = project.id
  JOIN tech ON project_uses_tech.tech_id  = tech.id;

-- Step 2

SELECT project.name AS pname, COUNT(tech.id) AS tech_count FROM project
  JOIN project_uses_tech ON project_uses_tech.project_id = project.id
  JOIN tech ON project_uses_tech.tech_id  = tech.id
  GROUP BY project.id;
