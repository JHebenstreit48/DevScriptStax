import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Handlebars = () => {
  const markdownFilePath = 'BackEnd/Frameworks/ExpressJS/Basics/ViewsAndStatic/Handlebars';

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
