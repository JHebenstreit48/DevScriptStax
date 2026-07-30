import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const CustomRendering = () => {
  const markdownFilePath = 'FrontEnd/Markdown/Advanced/Extending/CustomRendering';

  return (
    <>
      <PageLayout>
        <PageTitle title="Custom Rendering" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CustomRendering;
