import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
