import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Handlebars = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJs/Basics/ViewsAndStatic/Handlebars';

  return (
    <>
      <PageLayout>
        <PageTitle title="Handlebars" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Handlebars;
