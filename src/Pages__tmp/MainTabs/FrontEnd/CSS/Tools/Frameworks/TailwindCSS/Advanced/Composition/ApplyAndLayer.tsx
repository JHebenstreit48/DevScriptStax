import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ApplyAndLayer = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/TailwindCSS/Advanced/Composition/ApplyAndLayer';

  return (
    <>
      <PageLayout>
        <PageTitle title="@apply & @layer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ApplyAndLayer;
