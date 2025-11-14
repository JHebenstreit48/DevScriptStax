// Auto-generated TSX file: Structure

import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from "@/Components/Shared/Header/Header";
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Structure = () => {
  const markdownFilePath =
    'FrontEnd/React/Basics/SetupAndStructure/Structure';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Project Structure in React" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Structure;